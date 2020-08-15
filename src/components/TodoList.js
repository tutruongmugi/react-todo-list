import React from "react";
import { List } from "@material-ui/core";
import Todo from "./Todo";
/*
function TodoList({ data, }) {
  const {todos,
          removeTodo,
          toggleComplete,} = data;
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          ToggleComplete={ToggleComplete}
        />
      ))}
    </List>
  );
}*/
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
