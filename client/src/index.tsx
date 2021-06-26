import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Survey from 'survey-react-ui';

export function start() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
  );
}

export function survey(json, element) {
  const model = new Survey.Model(json);
  ReactDOM.render(
    <React.StrictMode>
      <div><Survey.Survey model={model}></Survey.Survey></div>
    </React.StrictMode>,
    document.getElementById(element)
  );
}