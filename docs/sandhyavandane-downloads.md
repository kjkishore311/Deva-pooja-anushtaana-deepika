# Sandhyavandane downloads

The homepage links to the **Sandhyavandana** section, which has two tracks: **a. Trikala Rigveda** and **b. Krishna Yajurveda**.

The Krishna Yajurveda track plays the free Nitya Sandhya Vandanam recording by Brahmasri Shankaramanchi Ramakrishna Sastry, streamed from its original source at vignanam.org (credited on the page). It needs no account or payment.

In the Rigveda track, Both the Rigveda guide and Naama Mudra Dharane PDF can be downloaded without payment or an account. The two Aachamana M4A recordings are sold together for a single ₹100 payment to the site's existing UPI recipient.

## Approve a payment

1. Create an account from the Sandhyavandane page and confirm its email address.
2. In Netlify's Identity user management, give the owner's account the `admin` role in its server-managed application metadata (`app_metadata.roles`). Never add this role to user-editable metadata. Sign out and back in after changing roles.
3. Open the Sandhyavandane page while signed in as this administrator. The **Payment approval queue** appears below the resources.
4. Check that each submitted 12-digit UTR matches a successful ₹100 credit to the intended recipient in the bank or UPI statement. Do not approve solely because a visitor supplied a reference number.
5. Approve the verified payment, or reject it with a reason. Rejected requests can be resubmitted with a corrected UTR. Transaction references cannot be reused across accounts.

Visitors must sign in with a confirmed email, pay using the QR code or mobile UPI link, and submit their UTR. Downloads stay locked until approval. Visitors return to the same page and account to retrieve their recordings; pending requests refresh automatically every 30 seconds while the page is open and can also be refreshed manually. No payment-confirmation email is sent. Do not ask visitors to pay twice when the original payment was successful.

## Deployment and storage

Netlify Identity must remain enabled with email/password registration open for new buyers. The activation marker is included in this change. Email confirmation and password recovery are handled through Identity.

Payment requests and approval decisions are stored in Netlify Database using the Drizzle schema in `db/schema.ts`. The migration in `netlify/database/migrations` is applied at deployment. No paid access is granted through browser storage or the existing pooja tier-unlock mechanism.

The source recordings are kept in `assets/sandhyavandane`, outside the public directory. The local Netlify build plugin stages them using the file-based Blobs upload API; Netlify uploads them to the deploy-scoped Blobs store during deployment. The download function checks the signed-in account's approved payment on every request before streaming an attachment. Deploy through Netlify's configured build pipeline so the plugin and Blobs upload run; copying only `dist` is not sufficient.

The free PDFs are in `public/downloads/sandhyavandane`. The site's service workers do not cache authenticated API or Identity responses.

The direct entry path `/rigveda-trikala-sandhyavandane` redirects to the dedicated section at `/#sandhyavandane`.
