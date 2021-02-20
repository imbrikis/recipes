import React from 'react';
import styles from '../css/RecipeCard.module.css';

const RecipeCard = ({ selectedRecipe }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>{selectedRecipe}</div>
    </div>
  );
};

export default RecipeCard;
