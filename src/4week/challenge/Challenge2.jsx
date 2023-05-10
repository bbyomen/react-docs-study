import { useReducer } from "react";

// TODO:
// useState를 useReducer를 활용하여 작성해주세요.
function useState(initialState) {
  const reducer = () => {
    // 해당 함수의 파라미터와 로직을 채워주시면 됩니다.
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}

export default function Challenge2() {
  const [couter, setCount] = useState(0);
  return (
    <div>
      {couter}
      <button onClick={() => setCount(couter + 1)}>Add one</button>
    </div>
  );
}
