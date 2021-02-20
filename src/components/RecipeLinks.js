import React, { useState } from 'react';
import styles from '../css/RecipeLinks.module.css';

import RecipeLink from './RecipeLink';

const RecipeLinks = ({ recipes, selectedRecipe, updateSelectedRecipe }) => {
  console.log(selectedRecipe);
  const renderedRecipeLinks = recipes.meals.map((item) => {
    return (
      <RecipeLink
        item={item}
        selected={item.idMeal === selectedRecipe ? true : false}
        updateSelectedRecipe={updateSelectedRecipe}
      />
    );
  });

  return (
    <div className={styles.recipe_links_container}>
      <ul className={styles.ul}>{renderedRecipeLinks}</ul>
    </div>
  );
};

export default RecipeLinks;
