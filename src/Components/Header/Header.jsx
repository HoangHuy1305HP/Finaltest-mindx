import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const TodoHeader = () => {
  return (
    <header className="header">
      <h1>#todo</h1>
      <div className="tabs">
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
      </div>
    </header>
  );
};

export default TodoHeader;