import React from 'react';
import styles from '../css/Nav.module.css';

import RecipeLinks from './RecipeLinks';
import SearchBox from './SearchBox';
import Footer from './Footer';

const Nav = ({ recipes, selectedRecipe, updateSelectedRecipe }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recipe Lookup</h1>
      <div className={styles.hr} />
      <RecipeLinks
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        updateSelectedRecipe={updateSelectedRecipe}
      />
      <div className={styles.search_footer_wrapper}>
        <SearchBox />
        <Footer />
      </div>
    </div>
  );
};

export default Nav;
