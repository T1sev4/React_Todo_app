import styles from './Todo.module.css';
import { IconName, RiTodoFill } from 'react-icons/ri';
function Todo({ todo, deleteTodo }) {
  const { id, isCompleted, text } = todo;
  return (
    <div
      onDoubleClick={() => {
        deleteTodo(id);
      }}
      className={styles.todo}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
    </div>
  );
}

export default Todo;
