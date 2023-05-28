import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Rout from './config/routes/Rout';
import './base.css'
function App() {
  return (
    <>
      <Header />
      <Rout />
    </>
   
  );
}




export default App;
