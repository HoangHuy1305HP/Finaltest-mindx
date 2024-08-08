import React from 'react';
import TodoItem from '../Items/Item';
import './List.css';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;