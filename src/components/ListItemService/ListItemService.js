import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItemService.module.css";
import ItemService from "../ItemService/ItemService";
import imgDeliveryTeam from "../../assets/deliveryTeam.png";
import imgStaff from "../../assets/staff.png";
import imgMvp from "../../assets/mvp.png";
import imgStrategy from "../../assets/strategy.png";
import Title from "../Title/Title";
import {
  titleSectionOurServices,
  subDeliveryTeam,
  subStaff,
  subMvp,
  subStrategy
} from "../../locale/es.js";

function ListItemService({}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <Title text={titleSectionOurServices} size="large2" />
      </div>
      <div className={styles.wrap}>
        <ItemService
          img={imgDeliveryTeam}
          title={"Delivery Team"}
          subtitle={subDeliveryTeam}
          normalText={"Your team"}
          hoverText={"is here"}
          button
          vertical
        />
        <ItemService
          img={imgStaff}
          title={"Staff Augmentation"}
          subtitle={subStaff}
          normalText={"Let´s go bigger"}
          hoverText={"yes we can!"}
          button
          vertical
        />
        <ItemService
          img={imgMvp}
          title={"MVP Development"}
          subtitle={subMvp}
          normalText={"Let´s do it"}
          hoverText={"together"}
          button
          vertical
        />
        <ItemService
          img={imgStrategy}
          title={"Project Strategy"}
          subtitle={subStrategy}
          normalText={"Think with us"}
          hoverText={"team work"}
          button
          vertical
        />
      </div>
    </div>
  );
}

export default ListItemService;
