// import "./App.css";
import { Outlet, Link } from "react-router-dom";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      {/* <Link to={`navbar`}>NavBar!</Link>
      <br /> */}
      <Outlet />
    </div>
  );
}

export default App;
