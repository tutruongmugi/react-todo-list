import React from "react";
import { ListItem, Checkbox, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo /*, removeTodo, toggleComplete*/ }) {
  /*
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  */
  return (
    /*
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
    </ListItem>*/
    <div style={{ display: "flex" }}>
      <input type="checkbox" />
      <li>{todo}</li>
      <button>X</button>
    </div>
  );
}

export default Todo;
