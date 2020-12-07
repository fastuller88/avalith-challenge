import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItemAvantages.module.css";
import ItemService from "../ItemService/ItemService";
import imgDeliveryTeam from "../../assets/flexible.png";
import imgStaff from "../../assets/account.png";
import imgMvp from "../../assets/billing.png";
import imgStrategy from "../../assets/recruitment.png";
import Title from "../Title/Title";
import { titleSectionAvantages, paraFlexibleCon } from "../../locale/es.js";

function ListItemService({}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <Title text={titleSectionAvantages} size="xxmedium" />
        </div>
        <ItemService
          img={imgDeliveryTeam}
          title={"<em>1. </em>Flexible Contracts"}
          subtitle={paraFlexibleCon}
        />
        <ItemService
          img={imgStaff}
          title={"<em>2. </em>Account Manager"}
          subtitle={paraFlexibleCon}
        />
        <ItemService
          img={imgMvp}
          title={"<em>3. </em>Monthly Billing"}
          subtitle={paraFlexibleCon}
        />
        <ItemService
          img={imgStrategy}
          title={"<em>4. </em>Recruitment"}
          subtitle={paraFlexibleCon}
        />
      </div>
    </div>
  );
}

export default ListItemService;
