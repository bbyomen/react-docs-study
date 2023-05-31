import { useEffect, useRef } from "react";

// React가 아닌 위젯 제어하기
// https://react-ko.dev/learn/synchronizing-with-effects#controlling-non-react-widgets

// 일부 API는 연속으로 두 번 호출하는 것을 허용하지 않을 수 있습니다.
// 예를 들어, 브라우저의 빌트인 요소인 <dialog>의 showModal 메서드는
// 두 번 호출하면 에러를 던집니다. 클린업 함수를 구현하고 대화 상자를 닫도록 합시다:

export default function Ex4() {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    // return () => dialog.close();
  }, []);
  return <dialog ref={dialogRef}>Welcome to the chat!</dialog>;
}
