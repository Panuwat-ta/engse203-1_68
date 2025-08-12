// src/TodoList.jsx
import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './contexts/TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext); // ดึง state มาจาก context

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        // ไม่ต้องส่ง props ที่เป็นฟังก์ชันอีกต่อไป
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;