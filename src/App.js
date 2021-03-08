import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.scss";

import CardGame from './components/CardGame/CardGame';
import Home from './components/Home/Home';
import Result from './components/Result/Result';

export default function App() {
  return (
    <Router>
      <div>
        <div >
        <nav>
          <ul className="navbar" >
            <li >
              <Link to="/">Restart</Link>
            </li>
            <li>
              <Link  to="/play">Let's Play!</Link>
            </li>
          </ul>
        </nav>
        </div>

        <Switch>
          <Route path="/play">
            <CardGame />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}