// components vie hoa chu cai dau tiên

import React, { useState } from "react";
import "./App.css"; // Import CSS file
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code todo list", status: 0 },
    { id: "task_3", title: "Task 1", status: 0 },
  ]);

  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        status: 0, // Setting status to 0 for new tasks
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask(""); // Reset newTask input
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    );
  };

  return (
    <div className="container">
      <Header title="Todo List" subtitle="get things array" />

      <TaskList
        tasks={tasks}
        showOnlyIncomplete={showOnlyIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
      />

      <AddTaskForm
        newTask={newTask}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
