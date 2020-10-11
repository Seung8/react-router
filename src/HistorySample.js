import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    // 방문 기록을 남기고 특정 페이지로 이동
    history.push("/");
  };

  const ReplaceToHome = () => {
    // replace()는 push()와 다르게 방문 기록을 남기지 않고 페이지를 이동한다.
    history.replace("/");
  };

  useEffect(() => {
    // history.block()은 페이지가 이탈되기 전 확인할 수 있도록 페이지 이탈 방지 역할을 한다.
    const unBlock = history.block("페이지가 이탈됩니다.");

    // 컴포넌트가 언마운트 될 때
    return () => {
      unBlock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>메인으로</button>
      <button onClick={goHome}>메인으로(Resplace)</button>
    </div>
  );
}

export default HistorySample;
