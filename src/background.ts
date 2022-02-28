chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const tabId = sender.tab?.id;
  if (tabId) {
    chrome.tabs.executeScript(tabId, {
      code: 'console.log("fucking hell")',
    })
  }
})