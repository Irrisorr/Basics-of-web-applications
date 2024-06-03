import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [hideCompleted, setHideCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const toggleHideCompleted = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <div className="App">
      <h1>Welcome to my To Do list!</h1>
      <div className="todo-container">
        <div className="hide-completed">
          <input
            type="checkbox"
            id="hideCompleted"
            checked={hideCompleted}
            onChange={toggleHideCompleted}
          />
          <label htmlFor="hideCompleted">Hide completed</label>
        </div>
        <hr />
        <ul className="task-list">
          {tasks.filter((task) => hideCompleted ? !task.completed : true).map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </li>
          ))}
        </ul>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;