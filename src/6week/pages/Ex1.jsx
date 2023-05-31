import { useState, useRef, useEffect } from "react";

// 브라우저 <video>태그에는 isPlaying prop이 없습니다.
// 이를 제어하는 유일한 방법은 DOM요소에서 play() 와 pause() 메서드를 수동으로 호출하는 것입니다.
// 이 비디오가 현재 재생되어야 하는지 여부를 알려주는 isPlaying prop값을
// play() 및 pause()와 같은 함수를 호출과 동기화해야합니다.

// 아래 코드가 올바르지 않은 이유는 렌더링 중에 DOM 노드로 무언가를 시도하기 때문입니다.
// React에서 렌더링은 JSX의 순수한 계산이어야 하며
// DOM 수정과 같은 사이드 이펙트를 포함해서는 안됩니다.

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  // if (isPlaying) {
  //   ref.current.play(); // Calling these while rendering isn't allowed.
  // } else {
  //   ref.current.pause(); // Also, this crashes.
  // }

  return <video ref={ref} src={src} loop playsInline />;
}

export default function Ex1() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="ex1">
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
