import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Section from "./Header/Header";
import ListItemService from "./ListItemService/ListItemService";
import ListItemAdvatange from "./ListItemAvantages/ListItemAvantages";
import WeAre from "./WeAre/WeAre";
import imgOurServices from "../assets/header.png";
import imgTech from "../assets/tech.png";
import {
  titleOurServices,
  subTitleOurServices,
  titleSectionTech,
  paraSectionTech
} from "../locale/es";

function App({}) {
  return (
    <Container>
      <Navbar />
      <Section
        h1={titleOurServices}
        h2={subTitleOurServices}
        img={imgOurServices}
      />
      <ListItemService />
      <Section
        h2={titleSectionTech}
        h3={paraSectionTech}
        img={imgTech}
        invert
        button
      />
      <ListItemAdvatange />
      <WeAre />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: #fff;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;

  @media (max-width: 1200px){
     padding-left: 1rem;
     padding-right: 1rem;
  }

`;
