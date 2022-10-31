import { Outlet, Link } from "react-router-dom";

import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
