import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from '../../components/About/About'
import TodoApp from '../../components/TodoApp/TodoApp';
import Meme from '../../components/Meme/Meme'
import Main from '../../components/Main/Main';

export default function Rout(){
  return (
    <Routes>
      <Route path="/" element={ <TodoApp />} />
      <Route path="/about" element={<About />} />
      <Route path="/meme" element={<Meme />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  )
}