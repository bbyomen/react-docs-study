import React from "react";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      5주차 - ref에 관하여
      <ol>
        <li>1. ref와 state의 차이점</li>
        <li>
          2. useRef, forwardRef, createRef, useImperativeHandle에 대해
          학습해보자
        </li>
      </ol>
    </div>
  );
}
