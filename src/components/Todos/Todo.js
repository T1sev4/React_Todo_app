import styles from './Todo.module.css';
import { IconName, RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
function Todo({ todo, deleteTodo, toggleTodo }) {
  const { id, isCompleted, text } = todo;
  return (
    <div
      className={`${styles.todo} ${isCompleted ? styles.completedTodo : ''}`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
      <RiDeleteBin2Line
        onClick={() => {
          deleteTodo(id);
        }}
        className={styles.deleteIcon}
      />
      <FaCheck
        onClick={() => {
          toggleTodo(id);
        }}
        className={styles.checkIcon}
      />
    </div>
  );
}

export default Todo;
