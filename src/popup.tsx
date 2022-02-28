import * as React from 'react';
import ReactDOM from 'react-dom';

import "./button.css";

function PopUp() {
  const handleButtonClick = () => chrome.runtime.sendMessage('Popup page sent a message!');

  return <button id="changeColor" onClick={handleButtonClick}>Trigger Message</button>;
}

ReactDOM.render(<PopUp />, document.body);
