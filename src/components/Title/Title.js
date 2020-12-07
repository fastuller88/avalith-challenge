import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.css";
var parse = require("html-react-parser");

function Title({ text, size = "medium" }) {
  return (
    <div className={(styles.container, styles[size])}>
      <h1>{parse(text ? text : "")}</h1>
    </div>
  );
}

export default Title;
