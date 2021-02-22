import React from 'react';
import styles from '../css/RecipeCard.module.css';

const RecipeCard = ({ recipes, selectedRecipe }) => {
  let result = {};
  recipes.meals.forEach((recipe) => {
    console.log(recipe.idMeal, selectedRecipe);
    if (recipe.idMeal === selectedRecipe) {
      result = recipe;
    }
  });

  console.log(result);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content_left}>
          <div className={styles.recipe_title}>{result.strMeal}</div>
        </div>
        <div className={styles.content_right}>
          <div className={styles.prep_steps_title}>Preparation Steps</div>
          <div className={styles.prep_steps_text}>{result.strInstructions}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
