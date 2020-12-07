import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ normalText, hoverText }) {
  hoverText = hoverText || "Hover";
  const [text, setText] = React.useState(normalText);
  return (
    <div className={styles.base}>
      <button
        onMouseOver={() => setText(hoverText)}
        onMouseLeave={() => setText(normalText)}
        className={styles.button}
      >
        {text ? text : "Click me"}
      </button>
    </div>
  );
}


export default Button;
