// Initialize or retrieve the active state
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['isActive'], function(result) {
    if (result.isActive === undefined) { // Set initial state to false on install
      chrome.storage.local.set({isActive: false});
      updateIcon(false);
    } else {
      updateIcon(result.isActive);
    }
  });
});

// Listen for the extension icon click to toggle the active state
chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(['isActive'], function(result) {
    let currentState = !result.isActive;
    chrome.storage.local.set({isActive: currentState});
    updateIcon(currentState);

    if (currentState) {
      startAutomation();
    } else {
      chrome.alarms.clear("automationAlarm");
    }
  });
});

function updateIcon(isActive) {
  const path = isActive ? "icon.png" : "icon2.png";
  chrome.action.setIcon({path});
}

function startAutomation() {
  // Execute immediately upon activation, then schedule recurrent execution
  executeContentScript();
  chrome.alarms.create("automationAlarm", {when: Date.now() + getRandomTime(61, 64) * 60000, periodInMinutes: getRandomTime(61, 64)});
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "automationAlarm") {
    executeContentScript();
  }
});

function executeContentScript() {
  // First, get the current active tab in the current window
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTabId = tabs[0].id; // Store the current tab ID

    // Now, create a new tab
    chrome.tabs.create({ url: "https://www.chanced.com/?page=bonus&tab=bank", active: false }, function(newTab) {
      // Wait until the new tab's page is fully loaded
      chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
        if (info.status === "complete" && tabId === newTab.id) {
          // Remove the listener to avoid unwanted multiple injections
          chrome.tabs.onUpdated.removeListener(listener);

          // Inject the content script into the new tab
          chrome.scripting.executeScript({
            target: { tabId: newTab.id },
            files: ["content.js"]
          }, () => console.log("Collecting GC and SC for you"));

          // Optionally, immediately switch back to the original tab to keep it in focus
          chrome.tabs.update(currentTabId, {active: true});
        }
      });
    });
  });
}

function getRandomTime(min, max) {
  return Math.random() * (max - min) + min;
}

// Ensure icon reflects current state on browser startup
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(['isActive'], function(result) {
    updateIcon(result.isActive);
    if (result.isActive) {
      startAutomation();
    }
  });
});
