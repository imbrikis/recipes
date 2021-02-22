import React from 'react';
import styles from '../css/Main.module.css';

import RecipeCard from './RecipeCard';

const Main = ({ recipes, selectedRecipe }) => {
  return (
    <div className={styles.container}>
      <RecipeCard selectedRecipe={selectedRecipe} recipes={recipes} />
    </div>
  );
};

export default Main;
