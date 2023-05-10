import { useState } from "react";

// React의 VDOM에서 컴포넌트를 구분하는 3가지 조건
// 1. 위치
// 2. 타입 (div, button 혹은 함수 컴포넌트 그 자체)
// 3. key

// * 구분한다: unmount 시킬지, unmount 시키고 새로운 컴포넌트를 mount 시킬지, 기존 컴포넌트를 update 시킬지 결정하는것.

export default function Ex5() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy ? (
        <div key="div">
          <Counter isFancy={true} />
        </div>
      ) : (
        <section key="div">
          <Counter isFancy={false} />
        </section>
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}
function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
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
