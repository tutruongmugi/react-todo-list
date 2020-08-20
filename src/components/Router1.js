import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Router1({ addTodo, todos, removeTodo, toggleComplete }) {
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default Router1;
