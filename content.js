// Wait for the page to fully load
setTimeout(() => {
  clickWalletButton();
}, 5000); // Adjust this delay as needed to ensure the page is fully loaded

function clickWalletButton() {
    const walletButton = Array.from(document.querySelectorAll("button")).find(button => button.textContent.includes('Wallet'));
    if (walletButton) {
        walletButton.click();
        // Wait 3 seconds before clicking the "Hourly Bonus" button
        setTimeout(() => clickHourlyBonusButton(), 3000);
    } else {
        console.error('Wallet button not found.');
    }
}

function clickHourlyBonusButton() {
    const hourlyBonusButton = Array.from(document.querySelectorAll("button")).find(button => button.textContent.includes('Hourly Bonus'));
    if (hourlyBonusButton && !hourlyBonusButton.disabled) {
        hourlyBonusButton.click();
        // Wait 3.5 second before executing clickClaimHourlyBonusButton
        setTimeout(() => clickClaimHourlyBonusButton(), 3500);
    } else {
        console.error('Hourly Bonus button not found.');
    }
}

function clickClaimHourlyBonusButton() {
    const claimButton = Array.from(document.querySelectorAll("button.btn-bet")).find(button => button.textContent.includes('Claim Hourly Bonus'));
    if (claimButton) {
        claimButton.click();
        // Wait 1.2 seconds before attempting to click the "Yes" button
        setTimeout(() => clickYesButton(), 1200);
    } else {
        console.error('Claim Hourly Bonus button not found.');
    }
}

function clickYesButton() {
    const yesButton = Array.from(document.querySelectorAll("button")).find(button => button.textContent.includes('Yes'));
    if (yesButton) {
        yesButton.click();
        // Wait 3.5 seconds before attempting to click the "OK" button
        setTimeout(() => clickOKButton(), 3500);
    } else {
        console.error('Yes button not found.');
    }
}

function clickOKButton() {
    const okButton = Array.from(document.querySelectorAll("button")).find(button => button.textContent.includes('OK'));
    if (okButton) {
        okButton.click();
        // Wait 2 second before closing the tab to ensure all processes complete
        setTimeout(() => window.close(), 2000);
    } else {
        console.error('OK button not found.');
    }
}
