import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';

import { HomePage } from "./components/home";
import { SurveyPage } from "./components/survey";

export default class App extends React.Component<any, any> {

  render() {
    return (

      <Router>
        <div className="">
          <NavLink className="" activeClassName="" to="/home" >Home</NavLink>
          <NavLink className="" activeClassName="" to="/surveys" >My Surveys</NavLink>
          <NavLink className="" activeClassName="" to="/survey" >Survey</NavLink>
        </div>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/surveys">
            <SurveyPage />
          </Route>
          <Route path="/survey">
            <SurveyPage />
          </Route>
        </Switch>
      </Router>

    );
  }
}
