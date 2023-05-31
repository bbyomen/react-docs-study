import React, { useEffect, useState } from "react";
import { getVisibleTodos, createTodo, initialTodos } from "./todo";

export default function NoEffect2() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState("");
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);

  useEffect(() => {
    setVisibleTodos(getVisibleTodos(todos, showActive));
  }, [todos, showActive]);

  useEffect(() => {
    setActiveTodos(todos.filter((todo) => !todo.completed));
  }, [todos]);

  function handleAddClick() {
    setText("");
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>{" "}
      <footer>{activeTodos.length} todos left</footer>
    </>
  );
}
