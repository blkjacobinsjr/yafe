# YAFE

Standalone Next.js App Router site for the first Yafe eyewear drop.

## Stack

- Next.js 16 App Router
- CSS modules plus `next/font`
- Server Action waitlist flow

## Local

```bash
npm install
npm run dev
```

## Waitlist behavior

- Local development writes submissions to `data/waitlist.json`.
- Vercel production logs submissions with the `[yafe-waitlist]` prefix when no webhook is configured.
- Set `WAITLIST_WEBHOOK_URL` to forward submissions to your actual waitlist tool.
- Set `WAITLIST_WEBHOOK_SECRET` if your webhook expects a shared secret header.

## Deploy

1. Push `/Users/mymac/Developer/yafe` as its own GitHub repo.
2. Import that repo into Vercel.
3. Add the optional waitlist environment variables if you want structured storage instead of log capture.

The image assets in `public/images` are already compressed for the launch page.
