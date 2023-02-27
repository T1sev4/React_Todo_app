import styles from './Todo.module.css';
import { IconName, RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
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
      <RiDeleteBin2Line className={styles.deleteIcon} />
      <FaCheck className={styles.checkIcon} />
    </div>
  );
}

export default Todo;
