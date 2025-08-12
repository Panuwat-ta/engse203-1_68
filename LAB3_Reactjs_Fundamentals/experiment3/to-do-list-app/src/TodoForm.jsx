// src/TodoForm.jsx
import React, { useState, useContext } from 'react';
import { TodoContext } from './contexts/TodoContext';

function TodoForm() {
  const { addTodo } = useContext(TodoContext); // ดึงฟังก์ชันมาจาก context
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="เพิ่มรายการใหม่..."
      />
      <button type="submit">เพิ่ม</button>
    </form>
  );
}

export default TodoForm;