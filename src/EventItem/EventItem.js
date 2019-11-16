import React from "react";
import Moment from "react-moment";
import { timeFormat } from "../helper";
import {
  EventWrapper,
  StyledImage,
  EventInfoContainer,
  StyledDate,
  ArrivalTime,
  City
} from "./EventItem.styles";

const EventItem = props => {
  return (
    <EventWrapper>
      <StyledImage src={`${props.image_url}`} />
      <EventInfoContainer>
        <StyledDate date={props.start_time} format='dddd, Do MMMM YYYY' />
        <ArrivalTime>{`Door opens at ${timeFormat(
          props.arrival_time
        )}`}</ArrivalTime>
        <City>{props.city}</City>
      </EventInfoContainer>
    </EventWrapper>
  );
};

export default EventItem;
