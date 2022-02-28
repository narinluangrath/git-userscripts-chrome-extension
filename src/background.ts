chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const tabId = sender.tab?.id;
  if (tabId) {
    chrome.scripting.executeScript({
      target: { tabId },
      func: () => console.log("hi"),
    })
  }
})