import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EventsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-flow: row;
  grid-gap: 40px;
  padding: 32px 64px;
`;
