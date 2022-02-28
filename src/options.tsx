import * as React from 'react';
import ReactDOM from 'react-dom';
import { useChromeStorageLocal } from 'use-chrome-storage';

import "./button.css";

function Options() {
  const [inputValue, setInputValue] = React.useState('');
  const [gitUrl, setGitUrl, isPersistent, error] = useChromeStorageLocal('gitUrl', '');

  const handleButtonClick = () => chrome.runtime.sendMessage('Options page sent a message!');

  return (
    <div>
      <p>{JSON.stringify({ gitUrl, isPersistent, error })}</p>
      <form onSubmit={() => setGitUrl(inputValue)}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      </form>
      <button onClick={handleButtonClick}>Trigger Message</button>
    </div>
  );
}

ReactDOM.render(<Options />, document.body);
