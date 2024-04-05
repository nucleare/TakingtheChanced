setTimeout(() => {
  clickClaimHourlyBonusButton();
  // And any subsequent functions you want to call after the initial one,
  // if they are supposed to run in sequence.
}, 5000); // 5000 milliseconds = 5.0 seconds

function clickClaimHourlyBonusButton() {
    const claimButton = Array.from(document.querySelectorAll("button.btn-bet")).find(button => button.textContent.includes('Claim Hourly Bonus'));
    if (claimButton) {
        claimButton.click();
        console.log('Claim Hourly Bonus button clicked.');
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
        console.log('Yes button clicked.');
        // Wait 3 seconds before attempting to click the "OK" button
        setTimeout(() => clickOKButton(), 3000);
    } else {
        console.error('Yes button not found.');
    }
}

function clickOKButton() {
    const okButton = Array.from(document.querySelectorAll("button")).find(button => button.textContent.includes('OK'));
    if (okButton) {
        okButton.click();
        console.log('OK button clicked.');
        // Wait 1 second before closing the tab to ensure all processes complete
        setTimeout(() => window.close(), 1000);
    } else {
        console.error('OK button not found.');
    }
}
