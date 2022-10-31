import React from "react";
import { Link } from "react-router-dom";

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.flex}>
      <div>
        icon
      </div>
      <div className={styles.flex}>
        <div>C</div>
        <div>o</div>
        <div>l</div>
        <div>o</div>
        <div>u</div>
        <div>r</div>
        <div>d</div>
        <div>l</div>
        <div>e</div>
        <div>!</div>
      </div>
      <div>
        icon
      </div>
      <div>
        icon
      </div>
    </nav>
  );
};

export default NavBar;
