import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import uuid from "uuid";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleTaskInputChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form action="/home.php" method="GET" onSubmit={handleSubmit}>
      <p>My To Do List</p>
      <TextField label="Task" onChange={handleTaskInputChange} value={todo} />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default TodoForm;
