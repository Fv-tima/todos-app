import React from "react";

export default function Todos({ input, setInput, todos, setTodos, id }) {
  function change(e) {
    setInput(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    setTodos([...todos, { id, title: input, completed: true }]);
    setInput("");
  }

  return (
    <div>
      <h1 className="todos-header">todos</h1>
      <form className="todos-form" onSubmit={submit}>
        <input
          type="text"
          value={input}
          className="todos-input"
          placeholder="Enter todo..."
          onChange={change}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
}
