import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './Task.css';

function Task({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editTask(task.id, updatedTitle, updatedDescription);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={handleEdit}><FaEdit /> Edit</button><br/>
          <button onClick={() => deleteTask(task.id)}><FaTrash /> Delete</button>
        </>
      )}
    </div>
  );
}

export default Task;
