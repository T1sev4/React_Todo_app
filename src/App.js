import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import TodoSearch from './components/Todos/TodoSearch';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');

  // CRUD //
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // функция для того чтобы сохранить isComplited
  const toggleTodoHandler = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted, text: newText } : todo
      )
    );
  };
  // функция для сохранения изменения
  const changeTodoText = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

   // CRUD //


  // Buttons //
  
  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  // Buttons //

  // функция которая смотрит на изменение в инпуте
  const searchHandler = (event) => {
    setSearchText(event.target.value);
  };

  // функция показывает только те туду которые есть в searchText
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );
  

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} setText={setText} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoSearch  value={searchText} onChange={searchHandler}  />

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        changeTodoText={changeTodoText}
        setText={setText}
      />

      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
