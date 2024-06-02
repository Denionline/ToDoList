import styles from "./EmptyTasks.module.css";
import { ClipboardText } from "@phosphor-icons/react";

export const EmptyTasks = () => {
  return (
    <div className={styles.emptyTasks}>
      <ClipboardText size={52} className={styles.clipboard} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
};
