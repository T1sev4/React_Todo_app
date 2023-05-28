
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header';
import TodoApp from './components/TodoApp/TodoApp';
import Meme from './components/Meme/Meme';
import Main from './components/Main/Main';
import './base.css'
function App() {
  return (
    <>
     <Header />
      <Routes>
        <Route path="/" element={ <TodoApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/meme" element={<Meme />} />
        <Route path="/main" element={<Main />} />
        
      </Routes>
    </>
   
  );
}




export default App;
