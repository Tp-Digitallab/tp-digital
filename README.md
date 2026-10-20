This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Enquiry flow

- `components/contact/LeadForm.tsx` is shared by the homepage and localized service pages. General enquiries start without a preselected paid package; package links select the requested package, and improvement links select a custom enquiry.
- Homepage calls to action stay on the homepage. `ScrollLink` notifies the form when a package anchor changes, including repeat clicks without a page reload.
- The form sends the page, selected service, optional website URL and message to the existing `/api/contact` endpoint. Package configuration comes from `config/packagePresets.ts`; pricing is validated on the server.
- Existing Turnstile verification and Telegram delivery require the configured environment variables. Never disable verification to test a live enquiry.

Before publishing, run `npm run lint`, `npx tsc --noEmit` and `npm run build`. In the browser, check general, improvement and package enquiries, all three languages, mobile navigation and keyboard labels. A successful build does not verify real message delivery: check one authorized test enquiry with valid Turnstile verification separately.

## Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
