import React from "react";
import styles from "./Header.module.css";
import Title from "../Title/Title";
import Button from "../Button/Button";
var parse = require("html-react-parser");

function Header({ h1, h2, h3, img, invert, button }) {
  let header = invert ? (
    <div className={styles.container}>
      <div className={styles.ilustration}>
        <img src={img} />
      </div>
      <div className={styles.text}>
        <Title text={h1} size="xlarge"/>
        <br />
        <Title text={h2} size="large" />
        <br />
        <Title text={h3} size="medium" />
        <br />
        {button && <Button />}
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.text}>
        <Title text={h1} size="xlarge"/>
        <br />
        <Title text={h2} size="large" />
        <br />
        <Title text={h3} size="medium" />
        <br />
        {button && <Button />}
      </div>
      <div className={styles.ilustration}>
        <img src={img} />
      </div>
    </div>
  );
  return header;
}

export default Header;
