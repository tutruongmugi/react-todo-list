import React from "react";
import { ListItem, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function TodoCompleted({ todo, removeTodo }) {
  const handleRemoveClick = (event) => {
    event.preventDefault();
    removeTodo(todo.id);
  };
  return (
    <ListItem style={{ display: "flex" }}>
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

export default TodoCompleted;
