import React from "react";
import PropTypes from "prop-types";
import styles from "./ItemService.module.css";
import Button from "../Button/Button";
import Title from "../Title/Title";
var parse = require("html-react-parser");

function ItemService({
  img,
  title,
  subtitle,
  normalText,
  hoverText,
  vertical,
  button
}) {
  const item = vertical ? (
    <div className={styles.container}>
      <img src={img} />
      <Title size={"xmedium"} text={title} />
      <span>{parse(subtitle)}</span>
      {button && <Button normalText={normalText} hoverText={hoverText} />}
    </div>
  ) : (
    <div className={styles.containerHz}>
      <div className={styles.containerText}>
        <Title size={"xmedium"} text={title} />
      </div>
      <div className={styles.containerImg}>
        <img src={img} />
      </div>
      <div className={styles.containerSubText}>
        <Title size={"small"} text={subtitle} />
      </div>
    </div>
  );
  return item;
}

export default ItemService;
