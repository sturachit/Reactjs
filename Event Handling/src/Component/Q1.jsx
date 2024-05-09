//1)Write a program to perform Done & remaining status using checkbox. Onchange event
import React, { useState } from "react";
function Q1() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", done: false },
    { id: 2, name: "Task 2", done: false },
    { id: 3, name: "Task 3", done: false }
  ]);

  function updateStatus(taskId) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  }

  const doneCount = tasks.filter(task => task.done).length;
  const remainingCount = tasks.filter(task => !task.done).length;
  const status = `Done: ${doneCount} | Remaining: ${remainingCount}`;

  return (
    <div>
      <h1>Done & Remaining Status</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" onChange={() => updateStatus(task.id)} checked={task.done} />
            <label>{task.name}</label>
          </li>
        ))}
      </ul>
      <p>{status}</p>
    </div>
  );
}

export default Q1;