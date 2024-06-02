import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./NewTask.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export interface IncludeTaskType {
  content: string;
  check: boolean;
}

interface NewTaskProps {
  onIncludeTask: (newTask: IncludeTaskType) => void;
}

export const NewTask = ({ onIncludeTask }: NewTaskProps) => {
  const [textNewTask, setTextNewTask] = useState("");

  const handleChangeTextNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTextNewTask(event.target.value);
  };

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault();
    onIncludeTask({ content: textNewTask, check: false });
    setTextNewTask("");
  };

  return (
    <form className={styles.newtask} onSubmit={handleNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleChangeTextNewTask}
        value={textNewTask}
      />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
};
