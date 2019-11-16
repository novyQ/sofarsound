import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 11px;
`;

export const EventsContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 720px;
  grid-template-columns: auto auto auto;
  grid-auto-flow: row;
  grid-gap: 50px;
  grid-row-gap: 40px;
  padding: 32px 64px;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0;
  background-color: #e6e6e6;
`;

export const SearchButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 12px 36px;
  color: white;
  background-color: #4baf50;
`;
