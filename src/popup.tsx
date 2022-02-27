import * as React from 'react';
import ReactDOM from 'react-dom';

import "./button.css";

function PopUp() {
  React.useEffect(() => {
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
  }, [])

  return <button id="changeColor" />;
}


ReactDOM.render(<PopUp />, document.body);
