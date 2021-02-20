import React, { useState } from 'react';
import styles from '../css/RecipeLink.module.css';

const RecipeLink = ({ item, selected, updateSelectedRecipe }) => {
  return (
    <li
      key={item.idMeal}
      className={styles.li + `${selected ? ` ${styles.li_selected}` : ''}`}
      onClick={() => updateSelectedRecipe(item.idMeal)}
    >
      <div className={styles.link_hover_mask}></div>
      <div className={styles.link}>{item.strMeal}</div>
    </li>
  );
};

export default RecipeLink;
