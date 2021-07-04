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

export function edit(json, element) {
  const creator: any = new Creator.SurveyCreator({});
  creator.JSON = json;
  ReactDOM.render(
    <React.StrictMode>
      <Creator.SurveyCreatorComponent creator={creator}></Creator.SurveyCreatorComponent>
    </React.StrictMode>,
    document.getElementById(element)
  );
}