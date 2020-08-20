import React from "react";
import { Switch, Route } from "react-router-dom";
import Router1 from "./Router1";
import Router2 from "./Router2";

function Main({ addTodo, todos, removeTodo, toggleComplete }) {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          {" "}
          <Router1
            addTodo={addTodo}
            todos={todos}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />{" "}
        </Route>
        <Route path="/completed">
          <Router2 todos={todos} removeTodo={removeTodo} />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
