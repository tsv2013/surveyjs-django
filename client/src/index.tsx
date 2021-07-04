import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as SurveyCore from 'survey-core';
import * as Survey from 'survey-react-ui';
import 'survey-core/modern.css';
import * as Creator from 'survey-creator-react';
import 'survey-creator-core/survey-creator-core.css';

SurveyCore.StylesManager.applyTheme("modern");

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
      <Survey.Survey model={model}></Survey.Survey>
    </React.StrictMode>,
    document.getElementById(element)
  );
}

export function edit(json, id, name, element) {
  const creator: any = new Creator.SurveyCreator({ isAutoSave: true });
  creator.JSON = json;
  creator.saveSurveyFunc = (no, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "/api/surveys/" + id);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {
      callback(no, true);
    };
    xhr.send(JSON.stringify({
      id: id,
      name: name,
      json: JSON.stringify(creator.JSON)
    }));
  };
  ReactDOM.render(
    <React.StrictMode>
      <Creator.SurveyCreatorComponent creator={creator}></Creator.SurveyCreatorComponent>
    </React.StrictMode>,
    document.getElementById(element)
  );
}