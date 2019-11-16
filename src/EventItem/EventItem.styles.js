import styled from "styled-components";
import Moment from "react-moment";

export const EventWrapper = styled.div`
  width: 100%;
  border: 1px solid #b0b0b0;
  border-radius: 3px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 80px;
`;

export const EventInfoContainer = styled.div`
  padding: 8px;
`;

export const StyledDate = styled(Moment)`
  font-weight: bold;
`;

export const ArrivalTime = styled.div`
  margin-top: 8px;
`;

export const City = styled.div`
  margin-top: 16px;
`;
