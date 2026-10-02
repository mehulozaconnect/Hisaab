# Hisaab — Money Tracker

Install on your phone in 5 minutes (same way as Sadhana 180):

1. On GitHub, create a new public repository named **Hisaab**.
2. Upload all the files in this folder: index.html, manifest.webmanifest, sw.js, the three icon-*.png files, logo.svg and this README.
3. Settings → Pages → Source: *Deploy from a branch* → Branch: **main**, folder **/ (root)** → Save.
4. After about a minute, open **https://mehulozaconnect.github.io/Hisaab/** in Chrome on your phone.
5. Chrome menu (⋮) → **Add to Home screen** → **Install**.

Installing matters: it makes Hisaab appear in the Share menu of your Messages app, so you can long-press any bank SMS → Share → Hisaab.

## Where your data lives
Everything is stored on the phone, inside Hisaab. Nothing is sent anywhere.
**Google Drive backup (recommended):** More → Backup & restore → *Set up Google Drive backup*, and follow the 5 steps shown (one time, on a laptop). After that, one tap backs up straight into a "Hisaab Backups" folder in your Drive, and *Restore from Google Drive* brings everything back on any phone or laptop.
Without that setup you can still use *Share backup file* (phone) and pick Drive, or *Download*. A reminder appears on Home once a day.

## SMS detection — three ways
- **Share**: long-press a bank SMS → Share → Hisaab.
- **Copy**: turn on *Detect copied SMS* (More → Add from SMS). Copy a bank SMS, open Hisaab, and it shows "New transaction detected".
- **Hands-free (optional)**: with MacroDroid (or similar), trigger on *SMS received* from your bank, and show a notification that opens
  `https://mehulozaconnect.github.io/Hisaab/?sms=` followed by the message text.
  Tap the notification and the transaction is ready to save.

Add the last 4 digits of each account or card (More → Accounts) so SMS go to the right account.
Hisaab remembers the category you pick for each payee and fills it next time.

## Credit cards and bills
- Open **More → Accounts**, edit each credit card and fill in **Statement day** and **Payment due day** (both are on your statement). Interest (3.6% a month), minimum due (5%) and late fee slabs are pre-filled; change them to match your card.
- Tap the card on Home to see the current bill, how much you have paid, what is left, the minimum, the due date and unbilled spends. Unpaid amounts carry forward to the next bill with estimated interest, late fee and 18% GST. When the next bill comes, Hisaab offers to add those charges.
- If Hisaab's figure differs from your statement, tap **Enter bill from statement**, or share the bank's "statement generated" SMS to Hisaab.
- **More → Bills & reminders**: add electricity, mobile, rent, insurance, school fees, SIPs and subscriptions. Mark autopay ones and Hisaab records them on the due date.
- Due and overdue items show under **Due soon** on Home. Turn on **Due-date alerts** for phone notifications, and use **Remind me in Google Calendar** on any bill or card for reminders that never miss.

## App lock
**More → App lock** sets a 4-digit PIN, and you can turn on **Unlock with fingerprint** there. If you forget the PIN you must erase and restore from a backup.

## Updating
Replace the files in the repository. The app picks up the new version the next time it opens online.
If you rename the repository, the app link changes; your data stays tied to the old link, so back up first and restore on the new link.
