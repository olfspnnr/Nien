import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import { Game } from "./Views/Game";

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Game">Start</NavLink>Nien
              </div>
            )}
          ></Route>
          <Route path="/Game">
            <Game></Game>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
