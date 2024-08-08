import React from 'react';
import './Item.css';

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
    </li>
  );
};

export default TodoItem;