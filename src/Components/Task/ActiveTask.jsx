import React from 'react';
import TodoList from '../List/List';
import '../../Css/ActiveTask.css'

const ActiveTasks = ({ todos, toggleTodo }) => {
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="active-container">
      <TodoList todos={activeTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default ActiveTasks;