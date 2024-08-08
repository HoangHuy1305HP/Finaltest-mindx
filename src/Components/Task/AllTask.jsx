import React from 'react';
import TodoList from '../List/List';
import TodoInput from '../Input/Input';
import '../../Css/AllTask.css'

const AllTasks = ({ todos, addTodo, toggleTodo }) => {
  return (
    <div className="task-container">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default AllTasks;