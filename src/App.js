import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: "Garbage",
    //   day: "Feb 5th at 3:00pm",
    //   reminder: false,
    // },
    // {
    //   id: 2,
    //   text: "shopping",
    //   day: "Feb 8th at 3:00pm",
    //   reminder: false,
    // },
    // {
    //   id: 3,
    //   text: "clean",
    //   day: "Feb 6th at 3:00pm",
    //   reminder: true,
    // },
  ]);
  //add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
};

export default App;
