import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
//import TodoForm from "./components/TodoForm";
//import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:4000/`;
    axios.get(apiUrl).then((result) => {
      const allTodos = result.data;
      setTodos(allTodos);
    });
  }, [setTodos]);

  const addTodo = (todo) => {
    setTodos(todos.concat(todo));
    // axios.post(`http://localhost:4000/`, { todo }).then((result) => {
    //   console.log(result.data);
    // });
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  /*
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
  */
  return (
    <div className="App">
      <Header />
      <Main
        addTodo={addTodo}
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
