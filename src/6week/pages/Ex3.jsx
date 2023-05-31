import { useEffect } from "react";

// 이 Effect는 마운트 시에만 실행되므로 콘솔에서
//  "✅ Connecting..."이 한 번 출력될 것으로 예상할 수 있습니다.
// 하지만 콘솔을 확인해보면 "✅ Connecting..."이 두 번 출력됩니다. 왜 그럴까요?

// 그래서 클린업 함수를 작성해줘야 합니다!

export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}

export default function Ex3() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
