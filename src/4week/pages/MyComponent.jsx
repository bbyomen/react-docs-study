import { useState } from "react";

// React의 VDOM에서 컴포넌트를 구분하는 3가지 조건
// 1. 위치
// 2. 타입 (div, button 혹은 함수 컴포넌트 그 자체)
// 3. key

// * 구분한다: unmount 시킬지, unmount 시키고 새로운 컴포넌트를 mount 시킬지, 기존 컴포넌트를 update 시킬지 결정하는것.
// 함수의 참조값이 달라지면 다른 타입이라고 React는 생각한다.

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState("");

    return <input value={text} onChange={(e) => setText(e.target.value)} />;
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}
