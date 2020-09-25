import React from "react";
import { ListItem, Checkbox, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

function Todo({ todo, removeTodo, toggleComplete }) {
  const handleCheckboxClick = (event) => {
    toggleComplete(todo.id);

    axios
      .post(`http://localhost:4000/update/${todo.id}`, {
        _id: todo._id,
        id: todo.id,
        task: todo.task,
        completed: todo.completed,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const handleRemoveClick = (event) => {
    event.preventDefault();

    axios.delete(`http://localhost:4000/delete/${todo.id}`).then((res) => {
      console.log(res.data);
    });
    removeTodo(todo.id);
  };
  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
