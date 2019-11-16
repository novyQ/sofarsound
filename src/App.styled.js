import styled from "styled-components";
import DatePicker from "react-datepicker";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 11px;
`;

export const EventsContainer = styled.div`
  display: grid;
  width: 700px;
  grid-template-columns: 200px 200px 200px;
  grid-auto-flow: row;
  grid-gap: 50px;
  grid-row-gap: 40px;
  padding: 32px 64px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 700px;
  align-items: center;
  padding: 8px 0;
`;

export const SearchButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 11px 36px;
  margin-left: auto;
  color: white;
  background-color: #4baf50;
`;

export const StyledDatePicker = styled(DatePicker)`
  margin-left: 32px;
  height: 33px;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

export const ResetFilters = styled.div`
  margin-left: 180px;
  display: ${props => !props.isShown && "none"};
`;
