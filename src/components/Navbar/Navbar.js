import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

function Navbar({}) {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <img src={logo} alt="avalith" />
        <div className={styles.hamburger}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
