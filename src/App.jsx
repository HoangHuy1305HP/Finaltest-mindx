import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoHeader from '../src/Components/Header/Header';
import AllTasks from '../src/Components/Task/AllTask';
import ActiveTasks from './Components/Task/ActiveTask';
import CompletedTasks from './Components/Task/CompletedTask';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <Router>
      <TodoHeader />
      <Routes>
        <Route 
          path="/" 
          element={<AllTasks todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} />} 
        />
        <Route 
          path="/active" 
          element={<ActiveTasks todos={todos} toggleTodo={toggleTodo} />} 
        />
        <Route 
          path="/completed" 
          element={<CompletedTasks todos={todos} toggleTodo={toggleTodo} clearCompleted={clearCompleted} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
