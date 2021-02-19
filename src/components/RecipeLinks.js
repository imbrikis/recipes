import React from 'react';
import styles from '../css/RecipeLinks.module.css';

const RecipeLinks = () => {
  return (
    <div className={styles.recipe_links}>
      <ul className={styles.ul}>
        <li className={styles.li}>Spaghetti Carbonara</li>
        <li className={styles.li}>Apple & Blackberry Crumble</li>
        <li className={styles.li}>Chicken Enchilada Casserole</li>
        <li className={styles.li}>Egg Drop Soup</li>
        <li className={styles.li}>Grilled Mac and Cheese Sandwich</li>
        <li className={styles.li}>Salted Caramel Cheescake</li>
        <li className={styles.li}>Thai Green Curry</li>
      </ul>
    </div>
  );
};

export default RecipeLinks;
