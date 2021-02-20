import React, { useState } from 'react';
import styles from '../css/App.module.css';
import recipes from '../data/meals';

import Nav from './Nav';
import Main from './Main';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState('52768');

  const updateSelectedRecipe = (item) => {
    setSelectedRecipe(item);
  };

  return (
    <div className={styles.container}>
      <Nav
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        updateSelectedRecipe={updateSelectedRecipe}
      />
      <Main recipes={recipes} selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default App;
