import { useState } from "react";

// React의 VDOM에서 컴포넌트를 구분하는 3가지 조건
// 1. 위치
// 2. 타입 (div, button 혹은 함수 컴포넌트 그 자체)
// 3. key

// * 구분한다: unmount 시킬지, unmount 시키고 새로운 컴포넌트를 mount 시킬지, 기존 컴포넌트를 update 시킬지 결정하는것.

// 같은 위치의 같은 타입의 Counter 컴포넌트지만, 다른 컴포넌트라고 React에게 말해주고 싶다.

export default function Ex6() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}
function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>
        {person}'s score: {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
