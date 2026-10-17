# Hisaab — Money Tracker

Install on your phone in 5 minutes (same way as Sadhana 180):

1. On GitHub, create a new public repository named **Hisaab**.
2. Upload all the files in this folder: index.html, manifest.webmanifest, sw.js, the three icon-*.png files, logo.svg and this README.
3. Settings → Pages → Source: *Deploy from a branch* → Branch: **main**, folder **/ (root)** → Save.
4. After about a minute, open **https://mehulozaconnect.github.io/Hisaab/** in Chrome on your phone.
5. Chrome menu (⋮) → **Add to Home screen** → **Install**.

Installing gives Hisaab its own icon and long-press shortcuts (Add expense, Ask Hisaab, Add income, Lend & borrow, Bills due).

## New in 2.3: a knowledge base behind one-line entries
One-line entries are now read against a built-in knowledge base of about 1,900 Indian everyday words and names:
- **About 1,430 things people buy and pay for**, in English, Hindi, Marathi and Hinglish (samosa, cutting chai, kanda, istri, light bill, school fees, agarbatti, traffic challan…), each linked to its category and sub-category.
- **About 425 shops, apps and services** (Swiggy, DMart, Uber, Jio, Adani Electricity, Apollo, PVR, IRCTC, LIC, Groww…). General stores like DMart, Amazon and Blinkit are marked, so there the item decides the category: "amazon 1299 shoes" goes to Clothing, "flipkart phone" to Electronics.
- **Income words** (salary, bonus, incentive, refund, cashback, FD interest, rent received…).
How a line is read: amount, date and account first; then the longest matching phrases ("chicken biryani", "local train pass"); the shop goes to Paid to and the thing bought to Notes; a specific shop decides the category, otherwise the main item does ("doctor fees" → Doctor). Small spelling slips ("samossa", "biriyani") are understood.
**Your own history is part of the knowledge base:** the shops you have used and the words you have written in Notes, with the categories you gave them, count before the built-in list. Any correction you save is remembered for that sentence.

## New in 2.2: smarter one-line entries
- **Shop and item are kept apart.** "idli 50 from Ramesh stall" fills Paid to **Ramesh Stall** and Notes **Idli**. Repeated words and words like local and nearby are dropped, so "coconut water 90 cash local coconut water" becomes **Coconut Water**, ₹90, Cash, Fruits & Vegetables.
- **It learns from you.** If you change what was filled in (say, Paid to "Coconut vendor") and save, the same words fill in your version every time after that.
- **Claude reads your entries (optional).** If you have connected Claude (Ask AI › ⚙), one-line entries are understood by Claude: it works out the shop, the item, the category, the account and the date from plain Hindi, English or Hinglish, using your own accounts and categories. About 20 paise an entry. If Claude can't be reached, Hisaab fills it in by itself. Switch it off in the same ⚙ screen.

## New in 2.1: a calmer Home
Home now shows only what you need day to day: the one-line entry box, **this month's spending** (with what is left in your budget per day), one **Needs attention** card, shortcuts, today's entries, quick add and your accounts.
- **Needs attention** gathers overdue and upcoming bills, budgets you have crossed, spending above your usual, and warranties ending, in one place. It shows the top 3; tap **See all** for the rest with Pay buttons. When nothing needs you, it just says **All clear**.
- Credit cards and loans are folded into one **Cards & loans** tile under Accounts. Tap it to see each one.
- Net worth, Last 7 days, Goals, Running EMIs and Lend & borrow are off Home by default. Switch any of them back on with **Customise Home** at the bottom of Home. Net worth over time is always in Analysis.

## New in 2.0
- **One-line entries, typed or spoken.** The box at the top of Home takes a whole entry in one line: type or say "450 Swiggy yesterday on card" and the amount, shop, category, date and account are filled in for you. Check it and tap Save. It understands "kal", "aaj", "parso", "3 days ago", "on 5th", "12 oct", weekdays, "8pm", "1.5k", "2 lakh", "cash", "card", "UPI" and your account names, "received 50000 salary", "atm withdrawal 3000", "paid card bill 20000" #tags, account numbers ("from RBL account 1785", "card xx4321": fill in **Last 4 digits of account or card** on each account under More › Accounts) and everyday food like idli, dosa, vada pav, poha, samosa, thali and atta. Put several in one line ("chai 30 and auto 80, lunch 250") and each one opens in turn, or tap **Save all**. Tap the mic to speak (Chrome on Android).
- **Split a bill.** On a new entry, tap **Split bill** to share one payment between categories, for example ₹2,500 at DMart as ₹1,800 Groceries and ₹700 Household. The rest stays in the first category.
- **Trips and tags.** **Trip tag** on an entry adds a tag such as "Goa trip". Start **trip mode** (More › Trips & tags, or the Trips button on Home) with a name and an end date, and every new entry is tagged until then. Tap a tag to see its total, the spend per day, a split by category and every entry.
- **Last month in review.** In the first 10 days of a month, Home shows a card for last month: earned, spent, saved, the biggest changes, and what went over budget. Open any month's review from Analysis.
- **Month calendar.** Each day shows how much you spent (darker means more spent), with a dot on days a bill is due. Tap a day to see its entries. No-spend days are counted. Open it from Home or the calendar button on Transactions.
- **Net worth over time.** The Net worth card shows the change this month and a small chart; Analysis shows the full chart for the last 12 months.
- **Subscriptions.** Lists every subscription and repeating bill, with the monthly and yearly cost. Hisaab also finds ones you have not set up as bills (Netflix, Spotify, gym and so on) from your entries.
- **Warranties.** Tap **Warranty** on a purchase (6 months to 5 years, or your own date). Home reminds you 30 days before it ends, and More › Warranties lists them all. Attach the bill photo to the same entry so it is handy for a claim.
- **Cash check.** Count the cash in your wallet, type it in, and Hisaab shows the difference. One tap adds the gap as a "Cash check" expense (or income, if you have more than Hisaab thinks), or corrects the opening balance instead. It works for bank accounts too.
- **Loan prepayment planner.** Pick a loan (or type one in), add a one-time prepayment or extra each month, and see the interest saved and how many months earlier it ends, or switch to see how much lower the EMI would be if you keep the same end date.
- **Customise Home.** At the bottom of Home, tap **Customise Home** to hide sections or move them up and down.
- **New look.** Bolder colours, larger text and more space between sections.

## Sign in with Google
More › the card at the top (or tap the profile name under "Hisaab" on Home) › **Sign in with Google**. Hisaab then saves your data, every profile included, to your own Google Drive (folder "Hisaab Backups"). On a new phone or laptop, open Hisaab, tap **Sign in with Google to bring my data back**, and everything returns.
- The first time needs the one-time Google setup described under "Where your data lives" (about 5 minutes on a laptop). On another device, just paste the same Client ID: copy it from More › Profiles & sign-in › Copy Client ID.
- Google lets a web app stay signed in for an hour at a time. While it is, every change is saved to Drive automatically; after that, the daily reminder on Home gives you a one-tap **Save to Google Drive**.
- There is no sign-up with email and password. That would need a server holding your financial data; with Google sign-in your data stays only on your phone and in your own Drive.

## Profiles (Personal, Office…)
Tap the profile name under "Hisaab" on Home › **New profile**. Each profile is a separate set of books with its own accounts, categories, budgets, goals and entries, for example "Personal" and "Office". Switch any time from the same place. Backups, the daily safety copy and Google Drive saves include every profile. Erase all data only erases the profile you are in.

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
- **Repeat** makes an entry come back monthly, quarterly, half-yearly or yearly on the same date, or **Custom**: every N days, weeks, months or years (for example every 2 weeks), for things like APY, SIPs, rent, insurance or salary. Leave **Add it automatically** on for auto-debits and Hisaab adds the entry on each date; turn it off to get a reminder and tap Pay yourself. You can also set **Stop after** a number of times. Open any old entry and tap Repeat to start repeating it from there. Repeating entries are listed in More › Bills & reminders, where you can change, skip or stop them.
- **Office will repay** (expenses only) is for money you'll claim back, like a cab to a client. It stays out of your spending and budgets and shows in Lend & borrow under "Office" until you tap Settle up.
- When editing, the **copy** icon at the top makes a new entry with the same details and today's date.
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

## Savings goals
More › Savings goals (or the Goals section on Home). Add a goal with a target and a date, such as an emergency fund of ₹3 lakh by March. Hisaab shows how far you have got and how much to put aside each month to get there on time. Either tap **Add money** whenever you save towards it, or link the goal to an account (an FD, RD or separate savings account) and it follows that balance. Ask AI "How are my goals?" for a summary.

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
Tap the eye on the spending card at the top of Home, or use More → Security → **Hide balances**, to show ₹ •••• instead of your net worth and account balances.

## Quick add and shortcuts
**Quick add** on Home lists what you log often (tea, cab, groceries). Tap one to open it with the amount and category filled in.
Long-press the Hisaab icon for **Add expense, Ask Hisaab, Add income, Lend & borrow, Bills due**. Drag one onto your home screen for a one-tap button.

## Add up several entries
Press and hold any entry on Home or Transactions, then tap more entries. The bar at the bottom shows the total, for example "₹6,068 · 3 selected". Tap a date heading to select that whole day. Use the buttons to copy the total or delete the selected entries. On the Transactions tab you can also tap the tick-box button at the top to start.

## Today and the last 7 days
Home shows today's entries with today's total, then each of the last 7 days with that day's total. "Per day" is how much you spent per day this month.

## Protection against clearing data
Hisaab keeps your data inside Chrome, so clearing Chrome's **storage / site data** erases it. Clearing the **cache** is safe.
Once a day, Hisaab saves a safety copy to your **Downloads** folder (Hisaab-backup-DATE.json). If your data is ever erased, open Hisaab, tap **Restore my data** and pick the newest file. You can switch this off in More › Backup & restore. Old copies can be deleted from Downloads any time.

## Shorter Home page
Use **Customise Home** at the bottom of Home to hide sections or change their order. You can also tap any section heading (Quick add, Accounts, Running EMIs, Today and others) to fold it to one line. Hisaab remembers what you folded. Analysis and Budgets work the same way.

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
The logo is **green**. Under More › Logo colour you can pick Green, Teal, Blue, Purple, Maroon, Saffron or Charcoal for the logo inside the app and on the browser tab. The home-screen icon comes from the icon files (green); after you upload them it updates within a day or two, or remove Hisaab from the home screen and add it again.
