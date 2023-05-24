import React from "react";

export default function Generic() {
  const str = guessReturnType<string>("what is my type");
  const num = guessReturnType<number>(2);
  return <div>generic</div>;
}

function guessReturnType<T>(value: T): T {
  return value;
}
