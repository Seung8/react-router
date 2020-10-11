import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/firstUser">테스터1</Link>
        </li>
        <li>
          <Link to="/profiles/secondUser">테스터2</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요.</div>} // render 속성을 사용하는 경우 함수형 컴포넌트를 바로 넣어줄 수 있음
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
