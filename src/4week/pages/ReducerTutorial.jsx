import React, { useState } from "react";

export default function ReducerTutorial() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="reducer-counter">
      counter: {counter}
      <button onClick={() => setCounter((c) => c + 1)}>+1</button>
      <button onClick={() => setCounter((c) => c - 1)}>-1</button>
    </div>
  );
}
