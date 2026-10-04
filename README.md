# Hisaab — Money Tracker

Install on your phone in 5 minutes (same way as Sadhana 180):

1. On GitHub, create a new public repository named **Hisaab**.
2. Upload all the files in this folder: index.html, manifest.webmanifest, sw.js, the three icon-*.png files, logo.svg and this README.
3. Settings → Pages → Source: *Deploy from a branch* → Branch: **main**, folder **/ (root)** → Save.
4. After about a minute, open **https://mehulozaconnect.github.io/Hisaab/** in Chrome on your phone.
5. Chrome menu (⋮) → **Add to Home screen** → **Install**.

Installing gives Hisaab its own icon and long-press shortcuts (Add expense, Ask Hisaab, Add income, Lend & borrow, Bills due).

## Where your data lives
Everything is stored on the phone, inside Hisaab. Nothing is sent anywhere.
**Google Drive backup (recommended):** More → Backup & restore → *Set up Google Drive backup*, and follow the 5 steps shown (one time, on a laptop). After that, one tap backs up straight into a "Hisaab Backups" folder in your Drive, and *Restore from Google Drive* brings everything back on any phone or laptop.
Without that setup you can still use *Share backup file* (phone) and pick Drive, or *Download*. A reminder appears on Home once a day.

## Adding an entry
Tap **+**. The amount comes first, in large figures at the top, with the keypad open at the bottom.
- **Keypad**: calculator layout (7 8 9 on top) with **+ − × ÷ =** above it, **00** for quick hundreds, **C** to clear and a tall **Done** key. The **₹ INR** button in the keypad's header changes the currency (27 more, with that day's exchange rate).
- After Done, the **category picker** opens: categories on the left, sub-categories as buttons on the right. **Edit** opens your category list; **+ New** adds a sub-category on the spot.
- Below the amount, one card holds Category, Paid from, Date (with Today / Yesterday / 2 days ago) and Paid to. Tap any line to change it.
- **Bill photo** attaches a photo of the bill. **Split into EMIs** turns a purchase into monthly EMIs.
- **Save** saves and closes; **Save & new** saves and opens a fresh entry straight away.
- The **bookmark** at the top keeps saved entries: save one you make often (maid's salary, milk) and fill it again in one tap.
Hisaab remembers the category you pick for each shop and fills it next time.

## Ask Hisaab (AI)
Tap **Ask AI** at the top of Home and type or speak a question in plain words, for example:
- "How much did I spend on fruits this month or in the last 3 months or from Feb till date?" (answers all three at once)
- "Where am I overspending in the last 3 months and how can I reduce it?"
- "Swiggy in September", "petrol this year", "top categories this month", "compare this month with last month", "what payments are due", "plan my next month", "who owes me money"
Answers are worked out instantly on your phone from your own entries, with totals, month-by-month bars and the entries behind them. Nothing is sent anywhere.
For open questions Hisaab can't work out ("Is my spending on kids reasonable?"), you can connect Claude: tap ⚙ in Ask Hisaab and paste an API key from console.anthropic.com. Each such question costs about ₹1–2 and sends a summary of your data. The key stays on that phone and is not in backups.
The **Budgets** tab shows how many categories went over budget in the last 3 months. Tap it for the reasons and what to cut.

## Lend & borrow (udhaar)
Tap the people icon at the top of Home. **I gave** records money you lent or paid back; **I got** records money you borrowed or got back. Hisaab keeps a running balance per person, shows "You'll get" and "You owe" on Home, reminds you of due dates, and has **Settle up** and **Remind on WhatsApp** buttons. Your bank balance changes, but your net worth does not, because the money is still yours (or still owed).

## Credit cards and bills
- Open **More → Accounts**, edit each credit card and fill in **Statement day** and **Payment due day** (both are on your statement). Interest (3.6% a month), minimum due (5%) and late fee slabs are pre-filled; change them to match your card.
- Tap the card on Home to see the current bill, how much you have paid, what is left, the minimum, the due date and unbilled spends. Unpaid amounts carry forward to the next bill with estimated interest, late fee and 18% GST. When the next bill comes, Hisaab offers to add those charges.
- If Hisaab's figure differs from your statement, tap **Enter bill from statement**.
- **More → Bills & reminders**: add electricity, mobile, rent, insurance, school fees, SIPs and subscriptions. Mark autopay ones and Hisaab records them on the due date.
- Due and overdue items show under **Due soon** on Home. Turn on **Due-date alerts** for phone notifications, and use **Remind me in Google Calendar** on any bill or card for reminders that never miss.

## Tax report
**More → Tax report** groups the year's tax-saving payments by section (80C/123, 80D/126, NPS, home loan interest, donations, savings interest, rent), shows what is left of each limit, and compares your tax under the old and new regimes once you add your salary. Set "Counts for income tax" on any transaction to tag it yourself, add amounts paid outside Hisaab (like EPF), and download an Excel summary for your CA. In January to March, Home reminds you if 80C is not used up.

## Foreign currency
On a new transaction, tap the **₹ INR** button beside the amount and pick the currency (USD, EUR, AED and 24 more). Type the amount you paid, for example 20 for a $20 subscription. Hisaab fetches that day's exchange rate and saves the rupee value. On a credit or debit card it also adds the card's forex fee (3.5% + 18% GST by default; change it with **Edit**). You can also type your own rate, for example the one on your card statement. The list shows both the dollar amount and the rupee amount.

## EMIs: 8/12 counts
Every EMI payment shows its count, like **EMI 8/12**, in the transaction list, and **Running EMIs** on Home shows each loan's progress, what is left and the end month. For a loan EMI set up as a bill, enter **Number of payments** and **Already paid before** in the bill. The count then continues from there, and the bill stops by itself after the last payment.

## Spending alerts
If a category this month is well above your usual (the average of your last 3 months), Home shows an alert with the reason (for example "Mostly Clothing") and a suggestion to stop or cut that spending for the rest of the month. Hisaab also warns you when you save an expense that takes a category over its usual. EMIs, investments, and quarterly or yearly fees are left out. Analysis → Month shows **This month vs your usual** for every category.

## Hide balances
Tap the eye on the Net worth card, or use More → Security → **Hide balances**, to show ₹ •••• instead of your net worth and account balances.

## Quick add and shortcuts
**Quick add** on Home lists what you log often (tea, cab, groceries). Tap one to open it with the amount and category filled in.
Long-press the Hisaab icon for **Add expense, Ask Hisaab, Add income, Lend & borrow, Bills due**. Drag one onto your home screen for a one-tap button.

## Add up several entries
Press and hold any entry on Home or Transactions, then tap more entries. The bar at the bottom shows the total, for example "₹6,068 · 3 selected". Tap a date heading to select that whole day. Use the buttons to copy the total or delete the selected entries. On the Transactions tab you can also tap the tick-box button at the top to start.

## Today and the last 7 days
Home shows today's entries with today's total, then each of the last 7 days with that day's total. "Daily average" is how much you spent per day this month.

## Protection against clearing data
Hisaab keeps your data inside Chrome, so clearing Chrome's **storage / site data** erases it. Clearing the **cache** is safe.
Once a day, Hisaab saves a safety copy to your **Downloads** folder (Hisaab-backup-DATE.json). If your data is ever erased, open Hisaab, tap **Restore my data** and pick the newest file. You can switch this off in More › Backup & restore. Old copies can be deleted from Downloads any time.

## Shorter Home page
Tap any section heading (Quick add, Accounts, Running EMIs, Today and others) to fold it to one line. Hisaab remembers what you folded. Analysis and Budgets work the same way.

## Laptop: mini window and shortcuts
Open Hisaab in Chrome or Edge on your laptop (install it from the address bar for its own window). Click the small window icon at the top of Home, or press **M**, to open a **mini window that stays on top** of everything else. Type the amount, pick a category, and press **Enter**. Today's spending and the month's total update as you go. The mini window closes when you close Hisaab, so keep Hisaab open, even minimised.
Keyboard shortcuts in the main window: **N** new expense, **I** income, **T** transfer, **M** mini window.
On Windows, pin Hisaab to the taskbar and right-click it for Add expense, Add income and Bills due.

## Excel report
More → Export to Excel now opens on a **Report** page:
- your income, spending, savings and savings rate, with daily and monthly averages
- **What went well** and **Needs attention**, for example categories over budget, spending above your usual, frequent small spends like food delivery, weekend spending, card usage and late fees
- **Where you can cut back**: each category, how much it went over, how much you can save a month, and what to do
- spending by category and month-by-month income and spending, with charts
- your biggest single expenses
- **Plan for next month**: expected income, fixed payments (EMIs, bills, quarterly fees), a suggested limit for each category, what is left to save, and a daily spending limit
Sheets for categories, payees, accounts and all transactions follow.

## App lock
**More → App lock** sets a 4-digit PIN, and you can turn on **Unlock with fingerprint** there. If you forget the PIN you must erase and restore from a backup.

## Updating
Replace the files in the repository. The app picks up the new version the next time it opens online.
If you rename the repository, the app link changes; your data stays tied to the old link, so back up first and restore on the new link.

## Look
Hisaab now opens in the **Saffron** theme (charcoal with a saffron accent). Change it any time under More › Theme.
