import React from "react";
import TodoListCompleted from "./TodoListCompleted";

function Router2({ todos, removeTodo }) {
  return (
    <div>
      <TodoListCompleted todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default Router2;
