import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const root = document.getElementById("root");
    root?.classList.remove(darkMode ? "lightMode" : "darkMode");
    root?.classList.add(darkMode ? "darkMode" : "lightMode");
  }, [darkMode]);
  return (
    <header className={styles.header}>
      <Link to={`/`}>
        <h1 className={styles.fullName}>BAKAAS REISVERK</h1>
        <h1 className={styles.shortName}>BR</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to={`/blog`}>
          <h2>Blog</h2>
        </Link>
        <Link to={`/reisverk`}>
          <h2>Reisverk</h2>
        </Link>
        <button onClick={() => setDarkMode((pre) => !pre)}>
          {darkMode ? "darkMode" : "lightMode"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
