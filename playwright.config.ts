import { defineConfig } from "@playwright/test";

// Run against a production build already started locally; never a live contact service.
export default defineConfig({
  testDir: "./tests/public-site",
  workers: 1,
  reporter: "list",
  use: {
    baseURL: process.env.PUBLIC_SITE_TEST_URL || "http://127.0.0.1:3417",
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    headless: true,
    reducedMotion: "reduce",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
});
