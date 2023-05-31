import { useEffect, useRef } from "react";

// 이벤트 구독하기
// https://react-ko.dev/learn/synchronizing-with-effects#subscribing-to-events

export default function Ex5() {
  useEffect(() => {
    function handleScroll(e) {
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ height: "2000px", overflow: "auto", background: "#f0f0f0" }}
    />
  );
}
