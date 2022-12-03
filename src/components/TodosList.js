import React from "react";
import { FaTimes } from "react-icons/fa";

export default function TodosList({ todos, setTodos }) {
  function delTodos(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function complete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <li
          className={`todos-list ${todo.completed ? "complete" : ""}`}
          key={todo.id}
          onDoubleClick={() => complete(todo.id)}
        >
          {todo.title}
          <FaTimes
            onClick={() => delTodos(todo.id)}
            style={{ color: "rgb(141, 101, 101)", cursor: "pointer" }}
          />
        </li>
      ))}
    </ul>
  );
}
