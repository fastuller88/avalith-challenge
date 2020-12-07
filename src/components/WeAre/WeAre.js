import React from "react";
import PropTypes from "prop-types";
import styles from "./WeAre.module.css";
import Title from "../Title/Title";
import Button from "../Button/Button";
function WeAre({}) {
  return (
    <div className={styles.base}>
      <Title text={"<em>We are</em>"} size="xlarge"/>
      <Title
        size={"xxmedium"}
        text={
          "<p>una empresa joven con ideas nuevas,<br/> enfocados en crecer continuamente."
        }
      />
      <br />
      <Button normalText={"Get in touch"} hoverText ={"now"}/>
    </div>
  );
}

export default WeAre;
