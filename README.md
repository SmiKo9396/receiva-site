# Receiva Marketing Site (Next.js + Tailwind)

This is the production-ready marketing site for **Receiva**.

## Run locally
```bash
npm install
cp .env.local.example .env.local
# edit .env.local with your SMTP credentials
npm run dev
```

## Build & start
```bash
npm run build
npm start
```

## Environment variables
- `SMTP_HOST` (e.g. smtp.office365.com)
- `SMTP_PORT` (587)
- `SMTP_USER` (info@receiva.bm)
- `SMTP_PASS` (your password for now; later use OAuth/relay)
- `SMTP_FROM` (info@receiva.bm)
- `LEADS_TO` (info@receiva.bm)

## Add Google Sheets later
Wire `/pages/api/lead.js` to an Apps Script or Sheets API by posting `req.body` to your webhook/service.

## Deployment
- Recommended: **Vercel**
- Add environment variables in the project settings
- Set root to project root, build command `next build`, output `.`
