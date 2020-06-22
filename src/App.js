import React from 'react';
import './App.scss';
// import {useSpring, useTrail, animated} from 'react-spring'
// import { jsx } from '@emotion/core;'
// import { css, cx } from 'emotion';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <Router>
      <div
      className="App">
    <Navigation

    />
    <Switch>
        <Route path="/about"> ABOUT </Route>
        <Route path="/menu"> MENU </Route>
        <Route path="/"> HOME </Route>
    </Switch>
      </div>
        </Router>
  )
}
// img to use
//https://image.flaticon.com/icons/svg/119/119597.svg
// https://image.flaticon.com/icons/svg/119/119595.svg
// https://image.flaticon.com/icons/svg/119/119587.svg
// https://image.flaticon.com/icons/svg/119/119587.svg
export default App;
