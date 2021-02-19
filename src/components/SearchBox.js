import React from 'react';
import styles from '../css/SearchBox.module.css';
import searchIcon from '../assets/icons/search_24px_outlined.svg';

const SearchBox = () => {
  return (
    <form className={styles.searchbox}>
      <img
        className={styles.search_icon}
        src={searchIcon}
        alt="search icon"
      ></img>
      <input className={styles.input} type="text" />
    </form>
  );
};

export default SearchBox;
