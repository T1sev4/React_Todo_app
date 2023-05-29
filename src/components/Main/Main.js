import { Link } from 'react-router-dom';
import React from 'react';
import styles from './main.module.css'
export default function Main(){
  return(
  <div className="container">
   <div className={styles.menu}>
      <Link className={styles.link} to="/">Main</Link>
      <Link className={styles.link} to="/about">About</Link>
      <Link className={styles.link} to="/todo">Todo App</Link>
      <Link className={styles.link} to="/meme">Meme</Link>
    </div>
  </div>
  )
}
