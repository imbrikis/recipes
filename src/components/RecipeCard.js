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
          <div className={styles.attributes_grid}>
            <div style={{ textAlign: 'left' }}>Type: </div>
            <div>{result.strCategory}</div>
            <div style={{ textAlign: 'right' }}>Difficulty:</div>
            <div>Easy</div>
            <div style={{ textAlign: 'left' }}>Serving: </div>
            <div>2 - 4 people</div>
          </div>
          <div className={styles.ingredients_title}>Ingredients</div>
          <div className={styles.ingredients_grid}>
            <div>{result.strIngredient1 ? result.strIngredient1 : null}</div>
            <div>{result.strIngredient2 ? result.strIngredient2 : null}</div>
            <div>{result.strIngredient3 ? result.strIngredient3 : null}</div>
            <div>{result.strIngredient4 ? result.strIngredient4 : null}</div>
            <div>{result.strIngredient5 ? result.strIngredient5 : null}</div>
            <div>{result.strIngredient6 ? result.strIngredient6 : null}</div>
            <div>{result.strIngredient7 ? result.strIngredient7 : null}</div>
            <div>{result.strIngredient8 ? result.strIngredient8 : null}</div>
            <div>{result.strIngredient9 ? result.strIngredient9 : null}</div>
            <div>{result.strIngredient10 ? result.strIngredient10 : null}</div>
            <div>{result.strIngredient11 ? result.strIngredient11 : null}</div>
            <div>{result.strIngredient12 ? result.strIngredient12 : null}</div>
            <div>{result.strIngredient13 ? result.strIngredient13 : null}</div>
            <div>{result.strIngredient14 ? result.strIngredient14 : null}</div>
            <div>{result.strIngredient15 ? result.strIngredient15 : null}</div>
            <div>{result.strIngredient16 ? result.strIngredient16 : null}</div>
            <div>{result.strIngredient17 ? result.strIngredient17 : null}</div>
            <div>{result.strIngredient18 ? result.strIngredient18 : null}</div>
            <div>{result.strIngredient19 ? result.strIngredient19 : null}</div>
            <div>{result.strIngredient20 ? result.strIngredient20 : null}</div>
          </div>
          <img
            className={styles.recipe_image}
            src={result.strMealThumb}
            alt={`${result.title} image`}
          />
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
