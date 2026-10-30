import { test, expect } from "@playwright/test";

const paths = ["/", "/axisclipes", "/privacidade", "/termos"];

test("public routes and baseline response headers are present", async ({ request }) => {
  for (const path of paths) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const headers = response.headers();
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["referrer-policy"]).toBe("no-referrer");
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["x-powered-by"]).toBeUndefined();
  }
  expect((await request.get("/docs/auditoria/TERMOS_DE_USO_RASCUNHO.md")).status()).toBe(404);
});

test("public documents describe the site without publishing app audit or commercial proposals", async ({ page }) => {
  for (const path of ["/privacidade", "/termos", "/axisclipes"]) {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("body")).not.toContainText(/MINUTA PARA REVISÃO|relatório recebido|campos pendentes|REQUIRES_REVIEW|OLLAMA_URL|30 dias de inatividade/i);
    const links = await page.locator('a[href^="mailto:"]').evaluateAll(items => items.map(item => item.getAttribute("href")));
    expect(links.length).toBeGreaterThan(0);
    expect(links.every(href => href === "mailto:engineeraxisltda@gmail.com")).toBeTruthy();
    expect(errors).toEqual([]);
  }
  await page.goto("/privacidade");
  await expect(page.locator("article")).toContainText("Google Fonts");
  await expect(page.locator("article")).toContainText("Vercel");
  await expect(page.locator("article")).toContainText("localStorage");
});

test("language, theme, and document navigation preserve user choices", async ({ page }) => {
  await page.goto("/privacidade");
  await page.getByRole("button", { name: "Switch language to English" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Website privacy");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Website privacy");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.locator("article").getByRole("link", { name: "Website terms", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Website terms");
});

test("briefing is only handed to WhatsApp after an explicit submit and is not sent to a site endpoint", async ({ page }) => {
  const submissions: string[] = [];
  page.on("request", request => {
    if (request.method() !== "GET") submissions.push(request.url());
  });
  await page.addInitScript(() => {
    const state = window as unknown as { briefingPopups: unknown[][] };
    state.briefingPopups = [];
    window.open = (...args) => { state.briefingPopups.push(args); return null; };
  });
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Revisar no WhatsApp" })).toBeAttached();
  await page.locator("#briefing-name").fill("Teste de revisão");
  await page.locator("#briefing-project").selectOption("Landing Page");
  await page.locator("#briefing-budget").selectOption("Até R$ 1.000");
  await page.locator("#briefing-message").fill("Exemplo <script> de texto & orçamento");
  await expect(page.locator("#briefing-privacy")).toContainText("compartilha o texto preenchido");
  expect(await page.evaluate(() => (window as unknown as { briefingPopups: unknown[][] }).briefingPopups)).toHaveLength(0);
  await page.locator("#briefing-name").press("Enter");
  const popups = await page.evaluate(() => (window as unknown as { briefingPopups: string[][] }).briefingPopups);
  expect(popups).toHaveLength(1);
  const destination = new URL(popups[0][0]);
  expect(destination.origin).toBe("https://wa.me");
  expect(destination.pathname).toBe("/5513991087633");
  expect(destination.searchParams.get("text")).toContain("Exemplo <script> de texto & orçamento");
  expect(popups[0][2]).toBe("noopener,noreferrer");
  expect(page.url()).not.toContain("Teste");
  expect(submissions).toEqual([]);
  await expect(page.locator('a[href="mailto:engineeraxisltda@gmail.com"]').first()).toBeAttached();
  await expect(page.locator('a[href="https://instagram.com/axis"], a[href="https://linkedin.com/company/axis"], a[href="mailto:contato@axis.dev"]')).toHaveCount(0);
});

test("website remains usable when local storage is blocked", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException("Storage blocked", "SecurityError"); };
    Storage.prototype.setItem = () => { throw new DOMException("Storage blocked", "SecurityError"); };
  });
  await page.goto("/privacidade");
  await page.getByRole("button", { name: "Switch language to English" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Website privacy");
  expect(errors).toEqual([]);
});

test("browser storage and automatic third-party connections match the public notice", async ({ page, context, baseURL }, testInfo) => {
  const external = new Set<string>();
  const siteOrigin = new URL(baseURL!).origin;
  page.on("request", request => {
    const url = new URL(request.url());
    if (url.origin !== siteOrigin) external.add(url.hostname);
  });
  for (const path of paths) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
  const keys = await page.evaluate(() => Object.keys(localStorage).sort());
  expect(keys).toEqual(["axis-language", "axis-theme"]);
  expect(await context.cookies()).toEqual([]);
  expect([...external].every(host => ["fonts.googleapis.com", "fonts.gstatic.com"].includes(host))).toBeTruthy();
  await testInfo.attach("external-connections", { body: JSON.stringify([...external].sort()), contentType: "application/json" });
});

for (const width of [360, 768, 1440]) {
  test(`public pages fit a ${width}px viewport and product images load`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/privacidade", "/termos", "/axisclipes"]) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    }
    const image = page.locator('img[alt*="Tela do AXIS CLIPES"]');
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
    await page.getByRole("button", { name: "Alternar tema de cores" }).click();
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.currentSrc)).toContain("Bright");
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
    await expect(page.getByRole("link", { name: /download|comprar|assinar/i })).toHaveCount(0);
  });
}
