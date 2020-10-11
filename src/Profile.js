import React from "react";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  firstUser: {
    name: "tester1",
    description: "First tester.",
  },
  secondUser: {
    name: "tester2",
    description: "Second tester.",
  },
};

// Route 컴포넌트에서 path 설정 시 콜론(:) 뒤에 담는 값을 match 파라미터로 할당
function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
}

export default Profile;
