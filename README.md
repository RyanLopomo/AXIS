This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

On Windows PowerShell, use `npm.cmd run dev` from this folder. This avoids the
`npm.ps1` execution-policy error without changing the system policy. The parent
workspace folder also forwards this command to the application.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

The stylesheet currently loads Inter, Montserrat and Poppins from Google Fonts. This external connection is described in the website privacy notice.

## Institutional release preparation

Public website notices are in `src/data/siteLegalDocuments.js`. App proposals and audit findings remain in `src/data/legalDocuments.js` and `docs/auditoria`; public routes must not import those drafts.

Read [the release preparation report](docs/auditoria/PREPARACAO_PUBLICACAO_INSTITUCIONAL.md) for outstanding owner confirmations and production checks. Deployment root: this folder (`AXIS`), framework Next.js. Do not publish app downloads or commercial flows from this institutional release.

To reproduce the browser checks, build and start a local production server:

```powershell
npm.cmd run build
npm.cmd run start -- --hostname 127.0.0.1 --port 3417
```

In another terminal, with Chrome installed:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'chrome'
npm.cmd run test:public
```

Alternatively, install Playwright Chromium with `npx.cmd playwright install chromium` and leave `PLAYWRIGHT_CHANNEL` unset. Tests use synthetic form text and intercept WhatsApp window opening; they do not send messages. Production Vercel settings are not verified by local browser tests.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
