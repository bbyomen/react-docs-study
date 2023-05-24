import { useReducer } from "react";

// TODO:
// useState를 useReducer를 활용하여 작성해주세요.
function useState(initialState) {
  const reducer = (state, action) =>
    typeof action === "function" ? action(state) : action;

  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}

export default function Challenge2() {
  const [couter, setCount] = useState(0);
  return (
    <div>
      {couter}
      <button onClick={() => setCount((c) => c + 1)}>Add one</button>
    </div>
  );
}
