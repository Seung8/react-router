import React from "react";
import qs from "qs";

// Url 쿼리 스트링을 파싱하기 위해 qs 모듈 사용(yarn add qs)하고
// Url 쿼리 파라미터를 파싱하기 위해 qs 라이브러리 사용
function About({ location }) {
  // 옵션 인자 내 ignoreQueryPrefix 옵션을 true로 설정해야 쿼리스트링 앞 물음표를 제외하고 파싱한다.
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  const detail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>소개 페이지.</p>
      {detail && <p>상세(detail) 조회</p>}
    </div>
  );
}

export default About;
