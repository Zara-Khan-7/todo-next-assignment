import React, { useState } from 'react';

interface EditTodoFormProps {
  editTodo: (task: string, id: string) => void;  // Change id type to string
  task: { id: string; task: string; };  // Change id type to string
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      editTodo(value, task.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  );
};
