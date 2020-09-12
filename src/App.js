import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {
  
  // variables
  
  const [todos, setTodos] = useState([
    { text: "Finish plus project", isComplete: false },
    { text: "Go to gym", isComplete: false },
    { text: "Remove weeds from the garden!", isComplete: false },
  ]);

  // methods (Google anonymous function)

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };



  // templates
 
  return (
    <div className="app">
      <div className="todo-list">
        <h1>My todo list</h1>
        { todos.map((todo, index) => (
          <TodoItem 
          todo={todo}
          key={index} // uniquely identify each do do with key={index}
          index={index} 
          completeTodo={completeTodo}
          /> 
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
