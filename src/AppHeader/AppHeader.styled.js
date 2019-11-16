import styled from "styled-components";
import { ReactComponent as Logo } from "../logo.svg";
import header from "./header.jpg";

export const AppHeaderWrapper = styled.div`
  text-align: center;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 30%;
  height: 300px;
  width: 100%;
  position: relative;
`;

export const StyledLogo = styled(Logo)`
  width: 80px;
  margin-top: 16px;
`;

export const HeaderText = styled.div`
  color: white;
  font-size: 60px;
  font-weight: 800;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
