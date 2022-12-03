import React from "react";
import { useState } from "react";
import Todos from "./components/Todos";
import TodosList from "./components/TodosList";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const id = Math.floor(Math.random() * 1000) + 1;

  return (
    <div className="container">
      <Todos
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        id={id}
      />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}
