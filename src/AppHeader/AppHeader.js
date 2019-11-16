import React from "react";
import { ReactComponent as Logo } from "../logo.svg";
import {
  AppHeaderWrapper,
  StyledLogo,
  HeaderText
} from "./AppHeader.styled.js";

const AppHeader = () => (
  <AppHeaderWrapper>
    <StyledLogo />
    <HeaderText>Find a Show</HeaderText>
  </AppHeaderWrapper>
);

export default AppHeader;
