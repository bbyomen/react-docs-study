import { useState, useRef, useEffect } from "react";

// 기본적으로 Effect는 매번 렌더링 후에 실행됩니다.
// 하지만 이를 원하지 않는 경우가 있습니다:

// 때로는 속도가 느릴 수 있습니다.
// 외부 시스템과의 동기화가 항상 즉각적인 것은 아니므로 꼭 필요한 경우가 아니라면 동기화를 건너뛰는 것이 좋습니다.
// 예를 들어, 키 입력 시마다 채팅 서버에 다시 연결하고 싶지 않을 수 있습니다.

// 때로는 잘못된 경우가 있습니다.
// 예를 들어, 키 입력 시마다 컴포넌트 페이드인 애니메이션을 발동시키고 싶지 않을 수 있습니다.
// 애니메이션은 컴포넌트가 처음 나타날 때 한 번만 재생되어야 합니다.

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Calling video.play()");
      ref.current.play();
    } else {
      console.log("Calling video.pause()");
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

// React는 Object.is 비교를 사용해 의존성 값을 비교합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is

// 의존성 배열에서 ref가 생략된 이유?

export default function Ex2() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="ex1">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}
