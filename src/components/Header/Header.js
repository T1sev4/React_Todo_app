import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.css'
// import logo from  '/android-chrome-512x512.png'
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link className={styles.link} to="/main"><img src='/T1sev4.svg' alt="" /></Link>
      </div>
      <div className={styles.nav}>
        <Link className={styles.link} to="/main">Main</Link>
        <Link className={styles.link} to="/about">About</Link>
        <Link className={styles.link} to="/">Todo App</Link>
        <Link className={styles.link} to="/meme">Meme</Link>
      </div>
    </header>
  );
}

export default Header;