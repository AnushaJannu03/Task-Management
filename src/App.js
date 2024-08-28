import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    setTasks([...tasks, { id: tasks.length + 1, title, description }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTitle, updatedDescription) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, title: updatedTitle, description: updatedDescription } : task
    ));
  };

  return (
    <div className="App">
      <h1>Tasks Management</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;
