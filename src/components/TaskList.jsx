import React from 'react';
import Task from './Task';
import './TaskList.css';

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
}

export default TaskList;
