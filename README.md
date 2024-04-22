# TakingtheChanced
Chrome Browser Extension that helps ensure the collection of the hourly bonus on [Chanced](https://www.chanced.com/c/4zfq3z). Additional feature coming soon...
_Last checked as working April 21, 2024_

_*Coming Soon*_
- Adds the ability to use hotkeys when playing certain Chanced Originals games, specifically: Mines, Limbo, Dice and Dice to start.
- - Decrease play amount by half
  - Increase play amount by double
  - Begin Play
- Later to add: Blackjack

# How it Works
It connects to your neural pathways and executes mouse functions dictated by your mind every hour which means, it opens a tab, navigates to the website, clicks on the buttons you'd think about clicking on when you want to go to collect your hourly bonus. Note that it installs by default as inactive. Click on the extension icon to activate. Click it again to deactivate. Every time you de-activate and re-activate the extension, the internal timer resets and presently runs every 61-64 minutes. If you hope to run this for long periods of time, it's suggested that you increase that intermittency range in `background.js` Line 36 `getRandomTime(61, 64)` to avoid being suspected of being C3PO or R2D2.

### PLEASE BE ADVISED
Although you probably could leave this running for however long you want, be aware that the tab does not close on it's own, so every time it runs, a new tab will be created. This was done for a couple of reasons, reasons left unsaid but let's just say, we couldn't interpret the the neural signal of your mind closing the tab when it's in the background *wink wink* It should go without saying...

**USE AT YOUR OWN RISK. I AM NOT RESPONSIBLE FOR WHAT YOU CHOOSE TO DO WITH THE WORK MADE AVAILABLE HERE NOR AM I LIABLE IN ANY WAY SHAPE OR FORM FOR WHAT MAY RESULT IN YOUR USE OF THIS WORK. YOU ARE SOLELY RESPONSIBILE FOR ANYTHING THAT HAPPENS THROUGH YOUR CUSTOMER ACCOUNT. WHETHER OR NOT YOU UNDERTOOK THOSE ACTIONS. _You understand that if you "engage in any activity that breaches the Terms and Conditions [of a website] or is otherwise illegal," your account may be terminated_.** *(As similarly said in Chanced's Terms and Conditions)*

<u>This extension is provided for educational purposes only. A learning project to see if one could create an extension using the power of the internet...</u>

## Requirements & Caveats
You must be logged into [Chanced](https://www.chanced.com/c/4zfq3z) for it to work. Make sure your login is saved so that the page to collect loads properly. ~~as it is designed to navigate directly to the bonus collection page.~~ This extension will stop working if they change how hourly bonuses are collected. Until then, _Carpe diem_.

It's recommended that you start (or activate) the extension when your hourly bonus is available to avoid console error logs from being reported and possibly intercepted by their sentry spies.

Not on Chanced yet? sign up [here](https://www.chanced.com/c/4zfq3z) to get special sign-up bonuses (Free GC and SC).

## Permissions
Wondering about Staying Private Ryan? Here's the explanations for the app permissions:
 - "alarms": Allows scheduling actions.
 - "scripting": Needed to translate your mental will into clicking actions.
 - "tabs": Enables opening a new tab and instantly switching back to your original tab with the blink of your eyes.
 - "<all_urls>": Ensures the extension can run while you're watching po- I mean, viewing other websites. It might work if you change this permission, but the service worker doesn't do anything during it's 1-hour lunch break that it takes every hour so it's not *running up a tab* or anything. *pun intended*
 - "storage": For preserving the extension state

# Installation
 - Download the files from this repository and save to a folder somewhere, preferrable somewhere you remember or ♪ ♫ *somewhere only we know* ♩ ♬ 
 - Open `chrome://extensions` in your browser
 - Enable Developer Mode in the top right
 - Click on 'Load unpacked'
 - Select the folder directory containing the files and click okay or whatever.
 - (Optionally) Pin it to your toolbar so you remember to turn it off when not in use and then when you're ready to communicate telepathically click on the Icon to activate.

## Updates

### Version 1.1
 - Removed directly navigating to previously Claim Hourly Bonus-specific URL and proceeds from the main page
 - Added steps for Clicking on Wallet, then Hourly Bonus
 - Removed all `console.log` messages while console errors messages (`console.error`) were left intact for troubleshooting, though it's recommened they be removed in case the site logs those errors when they occur and noticed error messages that are not theirs.
 - Removed the auto-close tab command from `content.js` 

-----

# What is Chanced?
[Chanced](https://www.chanced.com/c/4zfq3z) is a social casino, or what may be better known as a sweepstakes casino, where you can play casino-style games for free, without the need to gamble with real money. There are two currencies used on the site, Gold coins (GC) and Sweep coins (SC). You can use both currencies to play with but only Sweep Coins are redeemable for cash prizes. Because of this, Sweep Coins are not available for purchase and are only given away for free through promotional offers. Playing with Gold coins will help level up your VIP level and unlike Sweep Coins, cannot be used to redeem any sort of prize, it's only to play for fun and leveling up your VIP. Gold coins, however, can be purchased and often times there are Gold Coin bundles you can buy that come with free Sweep coins.

If you are already familiar with the concept, it's a site that's like a younger version of [Stake.us](stake.us/?c=Github) and more main stream than [LuckyBird](https://luckybird.io/?c=github) and unlike both, instead of dealing in cryptocurrency, Chanced offers users the ability to purchase Gold Coins with a credit or debit card and redeem prizes directly to a debit card or through ACH transfer. While they're still somewhat of a newer site and have less "Originals" games in comparison, they still offer for their Originals games like Dice, Limbo, Mines, Blackjack, and Baccarat. But, they're established enough to offer "main stream" slots from providers like Relax, Pragmatic, Hacksaw, Slotmill, BGaming, and Rogue along with Live Dealer games from Beter Live and Atmosphera.

One other thing that sets them apart from the rest, including Chumba, WoW Vegas, GlobalPoker, etc. is that their daily bonus isn't a daily bonus, it's an hourly bonus. Where, as of April 2024, consists of 1000 GC and 0.1 SC. However, their redemption minimnum is 100 SC.

If you're not already on the site, use [this link](https://www.chanced.com/c/4zfq3z) to sign-up and get 2.0 SC to start after verification. Sweepstakes play (or SC) is only open to US Residents (excluding the states of Idaho, Michigan, Nevada, Kentucky, and Washington).

_____

*This extension does not offer any sort of player advantage nor has it been designed to act as a system to replace your online habits. If you don't understand why or how this extensions respond to your telepathic commands, you probably shouldn't be using it.*

[Get 400,000 Gold Coins and 500 Super Coins at NoLimitCoins](https://nolimitcoins.com/?invited_by=F1N9RX)

###### The author and/or designer of this extension is not affiliated with, endorsed by or sponsored by, Gold Coin Group LLC. All trademarks and logos displayed appearing in this work are the property of their respective owners and are protected by applicable trademark and copyright laws. By downloading or using any part of this extension, you agree to indemnify the author against any and all damage that may arisie out of your conduct and use of the program. This work is not compatible with the Neuralink brain-computer interface. Please play responsibly. [Responsible Gameplay](https://www.chanced.com/docs/Responsible-Social-Gameplay.pdf)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
