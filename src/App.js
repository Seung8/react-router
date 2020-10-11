import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
import Profiles from "./Profiles";

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
        <li>
          <Link to="/profiles">사용자 목록</Link>
        </li>
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
        <hr />
      </ul>
      {/*
        Switch는 위에서부터  순차적으로 Route 컴포넌트를 읽으며 아무것도 찾지 못하면
        가장 아래에 위치한(path, component 속성 없이 render 속성만 있는) Route 컴포넌트를 노출한다. 
      */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>페이지를 찾을 수 없습니다...</h2>
              <p>{location.pathname} 페이지는 존재하지 않습니다.</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
