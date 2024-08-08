import React from 'react';
import TodoList from '../List/List';
 import '../../Css/CompletedTask.css'

const CompletedTasks = ({ todos, toggleTodo, clearCompleted }) => {
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="completed-container">
      <TodoList todos={completedTodos} toggleTodo={toggleTodo} />
      {completedTodos.length > 0 && (
        <button className="delete-button" onClick={clearCompleted}>
          Delete All
        </button>
      )}
    </div>
  );
};

export default CompletedTasks;