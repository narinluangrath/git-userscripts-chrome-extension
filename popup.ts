import "./button.css";

// Initialize button with users's prefered color
const button = document.createElement("button");
button.id = "changeColor";
document.body.appendChild(button);

const changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor!.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor!.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    // @ts-expect-error
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
