import { useState, useRef } from "react";

export default function TodoList() {
  const listRef = useRef(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    setText("");
    setTodos([...todos, newTodo]);
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <div
      style={{ backgroundColor: "tomato", height: "200px", overflowY: "auto" }}
    >
      <div style={{ position: "sticky", top: 0, backgroundColor: "tomato" }}>
        <button onClick={handleAdd}>Add</button>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <ul ref={listRef} style={{ display: "flex", flexDirection: "column" }}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "Todo #" + (i + 1),
  });
}
