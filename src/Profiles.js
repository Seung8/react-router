import React from "react";
import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
import RouterHookSample from "./RouterHookSample";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          {/* 현재 주소와 일치하는 경우 특정 작업(스타일 지정, 클래스 지정 등)을 수행 */}
          <NavLink
            to="/profiles/firstUser"
            activeStyle={{ color: "blue", fontWeight: "bold" }}
            activeClassName="selected"
          >
            테스터1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/secondUser"
            activeStyle={{ color: "blue", fontWeight: "bold" }}
            activeClassName="selected"
          >
            테스터2
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요.</div>} // render 속성을 사용하는 경우 함수형 컴포넌트를 바로 넣어줄 수 있음
      />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
}

export default Profiles;
