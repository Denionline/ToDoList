import styles from "./Tasks.module.css";
import { EmptyTasks } from "./others/EmptyTasks";
import { Task } from "./Task";
import { IncludeTaskType } from "./NewTask";

interface TasksProps {
  tasks: IncludeTaskType[];
  onDeleteTask: (content: string) => void;
  onChangeCheck: (tasks: IncludeTaskType) => void;
}

export const Tasks = ({ tasks, onDeleteTask, onChangeCheck }: TasksProps) => {
  const countCheckeds = tasks.filter((task) => task.check);
  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.completed}>
          <strong>Concluídas</strong>
          {countCheckeds.length > 0 ? (
            <span>
              {countCheckeds.length} de {tasks.length}
            </span>
          ) : (
            <span>{countCheckeds.length}</span>
          )}
        </div>
      </div>
      <div className={styles.taskList}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.content}
                task={task}
                onDeleteTask={onDeleteTask}
                onChangeCheck={onChangeCheck}
              />
            );
          })
        ) : (
          <EmptyTasks />
        )}
      </div>
    </div>
  );
};
