import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavBar.module.css";
// import FAHandler from "../FAHandler";

const hello = () => {
  console.log("Hello");
};

const colours = [
  "red",
  "orange",
  "gold",
  "green",
  "lightskyblue",
  "blue",
  "purple",
  "violet",
  "pink",
  "brown",
];

const Topbar = () => {
  return (
    <div className={`${styles.topbar} ${styles.flex}`}>
      <FontAwesomeIcon icon={"chart-column"} onClick={hello} size="lg" />
      <div className={styles.inline}>
        <h1 className={styles.inline} id="logo">
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
        </h1>
      </div>
      <div className={`${styles.flex} help`}>
        {/* <FAHandler> */}
          <FontAwesomeIcon icon={"circle-info"} onClick={hello} size="lg" />
          <FontAwesomeIcon icon={"circle-question"} onClick={hello} size="lg" />
        {/* </FAHandler> */}
      </div>
    </div>
  );
};

export default Topbar;
