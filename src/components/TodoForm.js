import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import uuid from "uuid";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ id: "", task: "", completed: false });

  const handleTaskInputChange = (event) => {
    setTodo({ ...todo, task: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        onChange={handleTaskInputChange}
        value={todo.task}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default TodoForm;
