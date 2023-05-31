// https://react-ko.dev/learn/synchronizing-with-effects#not-an-effect-initializing-the-application

// 1. 렌더링을 위해 데이터를 변환하는 경우 Effect는 필요하지 않습니다.
// 2. 사용자 이벤트를 처리하는 데에 Effect는 필요하지 않습니다.

import React, { useEffect, useState } from "react";

export default function NoEffect1() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <div>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <p>Full name: {fullName}</p>
      </div>
    </div>
  );
}
