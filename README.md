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
- The form sends the page, selected service and task, optional website URL and message as separate fields to `/api/contact`. Package configuration comes from `config/packagePresets.ts`; pricing is validated on the server and is not reported as the customer's stated budget.
- Existing Turnstile verification and Telegram delivery require the configured environment variables. Never disable verification to test a live enquiry.

Before publishing, run `npm run lint`, `npx tsc --noEmit` and `npm run build`. In the browser, check general, improvement and package enquiries, all three languages, mobile navigation and keyboard labels. A successful build does not verify real message delivery: check one authorized test enquiry with valid Turnstile verification separately.

## Resources

Service pages use `config/serviceOffers.ts` for localized deliverables and enquiry choices. SEO and website improvements submit a custom quote with the selected task in the message; the store page offers only store and custom enquiries. `ShopDemo` is an explicitly labelled prototype with fictional products: it does not process orders, collect customer details or accept payments.

`SecurityCheck` is shared by the enquiry form and calculator. It displays an email alternative on widget errors, timeouts, unsupported browsers and script load failures; an initialized widget can also be retried. Script errors are observed without overriding the library's script callbacks. Server verification remains mandatory. Console messages from a cross-origin Cloudflare challenge cannot be fixed by relaxing the site's CSP; diagnose a failed widget callback or rejected submission separately from internal browser warnings.

## Delivery of enquiries

Enquiries are delivered to the Telegram chat configured by `TELEGRAM_CHAT_ID`, using `TELEGRAM_BOT_TOKEN`. They are not emailed through IONOS. The email field is the visitor's reply address; no automatic acknowledgement email is sent.

Notifications include the name, reply email, interface language, service, task, website, source page and message. A package/configurator enquiry also includes the server-calculated scope and prices. Phone, customer-entered budget and timeline are shown only when supplied. Empty fields are omitted. HTML is escaped, and long notifications are split into messages with the same reference ID. Success requires Telegram to confirm each message. If delivery fails after an earlier part was sent, a retry can produce duplicate parts; match them by the reference of the original notification.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
