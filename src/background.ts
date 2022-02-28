chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const tabId = sender.tab?.id;
  console.log(`Tab with id ${tabId} sent the following message: ${message}`, sender);
  // if (tabId) {
  //   chrome.tabs.executeScript(tabId, {
  //     code: 'console.log("fucking hell")',
  //   })
  // }
})