# TakingtheChanced
Chrome Browser Extension that automatically collects the hourly bonus for you on [Chanced](https://www.chanced.com/c/4zfq3z)

_As of at least April 2024_, the hourly bonus on Chanced does not require a captcha to be collected and until that happens, I figured an extension to automatically do that for me would ensure I didn't have to remember visiting the site every hour. So, I made an extension to do it for me.

# How it Works
Installs inactive. Click on the extension icon to activate. Upon activation it opens a new tab in your active browser window and quickly hides itself in the background (pretty much opens in the background but technically doesn't or can't actually), waits a little bit and clicks the collect bonus button, waits a bit, clicks yes to confirm, waits a bit, clicks OK to close, then closes the tab. It's meant to be the least intrusive as possible (actually just went off while I was typing this and didn't interrupt me, w00t) Repeats this action every 61 to 64 minutes so that it won't appear too... robotic, you can obviously change this if you are downloading to install in developer mode.

## Requirements & Caveats
You must be logged into [Chanced](https://www.chanced.com/c/4zfq3z) for it to work. Make sure your login is saved so that the page loads as it navigates directly to the bonus collection page. This extension will stop working if they decide to add a captcha to collecting the bonus like every other site out there, so I don't doubt it'll be here one day. But for now, make every hour count and that's 24,000 GC and 2.4 SC every day, more than double of any other social casino that I know of and ain't nobody trying to leave money on the table.

It's recommended that you only start (or activate) the extension when your hourly bonus is available. While you can still activate it when it's not available, it won't run again until an hour later so it's not a huge deal as from then on, it'll collect whenever it does become available, but just putting that out there that there's no check function to see if the button is clickable or not. I may add it in the future, we'll see, depends how long we'll be able to collect without a captcha.

When (probably not "if") captcha gets added, this extension will stop working. Site updates will also prevent the extension from working. I may or may not incorporate a work around, so use it while you still can. If you're not on Chanced yet, sign up [here](https://www.chanced.com/c/4zfq3z) to get extra sign-up bonuses.

## Permissions
"alarms": Allows scheduling actions.
"scripting": Needed to automate the clicking process.
"tabs": Enables opening a new tab and instantly switching back to your original tab.
"<all_urls>": Ensures the extension can run while you're surfing other sites, otherwise you'd have to leave a window open on the site.
"storage": For preserving the extension state

# Installation
 - Download the files from this repository and save to a folder somewhere
 - Open chrome://extensions
 - Enable Developer Mode in the top right
 - Click on 'Load unpacked'
 - Select the folder directory containing the files
 - Done. Click on the Icon to activate.

## What is Chanced?
[Chanced](https://www.chanced.com/c/4zfq3z) is a social casino, or what may be better known as a sweepstakes casino, where you can play casino-style games for free, without the need to gamble with real money. There are two currencies used on the site, Gold coins (GC) and Sweep coins (SC). You can use both currencies to play with but only Sweep Coins are redeemable for cash prizes. Because of this, Sweep Coins are not available for purchase and are only given away for free through promotional offers. Playing with Gold coins will help level up your VIP level and unlike Sweep Coins, cannot be used to redeem any sort of prize, it's only to play for fun and leveling up your VIP. Gold coins, however, can be purchased and often times there are Gold Coin bundles you can buy that come with free Sweep coins.

If you are already familiar with the concept, it's a site that's like a younger version of [Stake.us](stake.us/?c=Github) and more main stream than [LuckyBird](https://luckybird.io/?c=github) and unlike both, instead of dealing in cryptocurrency, Chanced offers users the ability to purchase Gold Coins with a credit or debit card and redeem prizes directly to a debit card or through ACH transfer. While they're still somewhat of a newer site and have less "Originals" games in comparison, they still offer for their Originals games like Dice, Limbo, Mines, Blackjack, and Baccarat. But, they're established enough to offer "main stream" slots from providers like Relax, Pragmatic, Hacksaw, Slotmill, BGaming, and Rogue along with Live Dealer games from Beter Live and Atmosphera.

One other thing that sets them apart from the rest, including Chumba, WoW Vegas, GlobalPoker, etc. is that their daily bonus isn't a daily bonus, it's an hourly bonus. Where, as of April 2024, consists of 1000 GC and 0.1 SC. However, their redemption minimnum is 100 SC.

If you're not already on the site, use [this link](https://www.chanced.com/c/4zfq3z) to sign-up and get 2.0 SC to start after verification. Sweepstakes play (or SC) is only open to US Residents (excluding the states of Idaho, Michigan, Nevada, Kentucky, and Washington).
