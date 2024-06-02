import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
// import { Checkbox } from "@mui/material";
import { IncludeTaskType } from "./NewTask";

interface TaskProps {
  task: IncludeTaskType;
  onDeleteTask: (content: string) => void;
  onChangeCheck: (task: IncludeTaskType) => void;
}

export const Task = ({ task, onDeleteTask, onChangeCheck }: TaskProps) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.content);
  };

  const handleChangeCheck = () => {
    onChangeCheck(task);
  };

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        id={task.content}
        className={styles.checkbox}
        checked={task.check}
        onChange={handleChangeCheck}
      />
      <label htmlFor={task.content}></label>
      <p>{task.content}</p>
      <button className={styles.trash} onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
};
