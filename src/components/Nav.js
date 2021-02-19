import React from 'react';
import styles from '../css/Nav.module.css';

import RecipeLinks from './RecipeLinks';

const Nav = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recipe Lookup</h1>
      <div className={styles.hr} />
      <RecipeLinks />
    </div>
  );
};

export default Nav;
