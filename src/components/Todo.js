import React from "react";
import { ListItem, Checkbox, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, removeTodo, toggleComplete }) {
  const handleCheckboxClick = (event) => {
    toggleComplete(todo.id);
  };
  const handleRemoveClick = (event) => {
    event.preventDefault();
    removeTodo(todo.id);
  };
  return (
    <ListItem>
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
