import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import uuid from "uuid";
import axios from "axios";

//import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ id: "", task: "", completed: false });

  const handleTaskInputChange = (event) => {
    setTodo({ ...todo, task: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      const apiUrl = `http://localhost:4000/`;
      axios.post(apiUrl, { task: todo.task }).then((result) => {
        console.log(result.data);
      });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        onChange={handleTaskInputChange}
        value={todo.task}
        name="task"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default TodoForm;
