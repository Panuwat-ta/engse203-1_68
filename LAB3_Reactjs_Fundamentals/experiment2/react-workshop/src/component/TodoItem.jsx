// src/TodoItem.jsx
import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

function TodoItem({ todo }) { // 🔽 รับแค่ todo ก็พอ
  const { deleteTodo, toggleTodo, editTodo } = useContext(TodoContext); // 🔽 ดึงฟังก์ชันมาจาก context
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  // ... (ส่วน JSX เหมือนเดิมทุกประการ)
  return (
     <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave}
          onKeyPress={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
        />
      ) : (
        <span onClick={() => toggleTodo(todo.id)}>
          {todo.text}
        </span>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleSave} className="save-btn">บันทึก</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-btn">แก้ไข</button>
        )}
        <button onClick={() => deleteTodo(todo.id)}>ลบ</button>
      </div>
    </li>
  );
}

export default TodoItem;