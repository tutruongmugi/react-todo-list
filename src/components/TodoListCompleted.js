import React from "react";
import { List } from "@material-ui/core";
import TodoCompleted from "./TodoCompleted";

function TodoListCompleted({ todos, removeTodo }) {
  return (
    <List>
      {todos
        .filter((todo) => todo.completed)
        .map((todo) => (
          <TodoCompleted key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
    </List>
  );
}

export default TodoListCompleted;
