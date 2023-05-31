import { useEffect, useRef, useState } from "react";

// 데이터 페칭하기
// https://react-ko.dev/learn/synchronizing-with-effects#fetching-data

// NextJS 같은 데이터 페칭 솔루션을 제공하는 프레임워크나
// 서버 상태관리를 위한 라이브러리인 react-query, swr, RTK-query를 이용해보자

export default function Ex6() {
  const [todo, setTodo] = useState();
  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const result = await res.json();
      if (!ignore) {
        setTodo(result);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);
  return <pre>{todo && JSON.stringify(todo, null, 2)}</pre>;
}
