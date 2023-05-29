import React, { Component } from 'react';
import styles from './about.module.css';

class About extends Component {
  componentDidMount() {
    console.log('About component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('About component updated');
  }

  componentWillUnmount() {
    console.log('About component unmounted');
  }

  render() {
    return (
      <div className="container">
        <h1 className={styles.name}>Name: Tamerlan Tyulyubekov</h1>
        <h3 className={styles.info}>Group: IT2HE-2001</h3>
        <h3 className={styles.info}>Version: 1.1.5</h3>
        <p className={styles.copyright}>
          © 2023 - 2023 t1sev4 - All Rights Reserved.
          Last Updated: 05/29/2023 13:22:43
        </p>
      </div>
    );
  }
}

export default About;
