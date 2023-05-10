import { useState } from "react";
// React에서 화면의 각 컴포넌트는 완전히 분리된 state를 갖습니다.
// 예를 들어 두 개의 Counter 컴포넌트를 나란히 렌더링하면 각각 독립적인 score 및 hover state를 갖게 됩니다.
export default function Ex1() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}

function Counter() {
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
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
