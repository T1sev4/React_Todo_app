import styles from './Todo.module.css';
import { IconName, RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck, FaSave, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Todo({ todo, deleteTodo, toggleTodo, changeTodoText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  // функция которая показывает туду с инпутом если мы на нее нажали и если мы закончили и сохранили показывает просто туду
  const startEditing = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    // проверяем при помощи trim не пустой ли инпут
    if (editedText.trim() !== '') {
      changeTodoText(todo.id, editedText);
    }
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  // функция для контролируемого инпута в туду
  const updateText = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcon} />
      {isEditing ? (
        <div className={styles.editInputBlock}>
          <input
            type="text"
            value={editedText}
            onChange={updateText}
            autoFocus
            className={styles.editInput}
          />
          <div className={styles.buttonContainer}>
            <FaSave onClick={saveChanges} className={styles.saveIcon} />
            <FaTimes onClick={cancelEditing} className={styles.cancelIcon} />
          </div>
        </div>
      ) : (
        <>
        <div className={styles.todoText} onClick={startEditing}>
          {todo.text}
        </div>
        <RiDeleteBin2Line onClick={() => deleteTodo(todo.id)} className={styles.deleteIcon} />
        <FaCheck onClick={() => toggleTodo(todo.id, editedText)} className={styles.checkIcon} />
        </>
        
      )}
      

    </div>
  );
}

export default Todo;
