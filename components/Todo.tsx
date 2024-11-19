import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Todo {
  id: string;  // Change id type to string
  task: string;
  completed: boolean;
}

interface TodoProps {
  task: Todo;
  deleteTodo: (id: string) => void;  // Change id type to string
  editTodo: (id: string) => void;    // Change id type to string
  toggleComplete: (id: string) => void;  // Change id type to string
}

export const Todo: React.FC<TodoProps> = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? 'completed' : 'incompleted'}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
