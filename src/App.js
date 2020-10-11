import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <hr />
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default App;
