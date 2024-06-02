import { useState } from "react";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { NewTask, IncludeTaskType } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import "./global.css";

function App() {
  const [tasks, setTasks] = useState<IncludeTaskType[]>([]);

  const includeTask = (newTask: IncludeTaskType) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskToRemove: string) => {
    const tasksWithoutTaskDeleted = tasks.filter(
      (task) => task.content != taskToRemove
    );
    setTasks(tasksWithoutTaskDeleted);
  };

  const changeCheck = (taskToChangeCheck: IncludeTaskType) => {
    const tasksWithCheckTaskChanged = tasks.map((task) => {
      if (task.content === taskToChangeCheck.content) {
        task.check ? (task.check = false) : (task.check = true);
        return task;
      }
      return task;
    });
    setTasks(tasksWithCheckTaskChanged);
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <NewTask onIncludeTask={includeTask} />
          <Tasks
            tasks={tasks}
            onDeleteTask={deleteTask}
            onChangeCheck={changeCheck}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
