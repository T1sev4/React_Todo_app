import styles from './Todo.module.css';
import { IconName, RiTodoFill } from 'react-icons/ri';
function Todo({ todo, index, deleteTodo }) {
  return (
    <div
      onDoubleClick={() => {
        deleteTodo(index);
      }}
      className={styles.todo}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}

export default Todo;
