import React from "react";
import {
  EventWrapper,
  StyledImage,
  EventInfoContainer
} from "./EventItem.styles";

const EventItem = props => (
  <EventWrapper>
    <StyledImage src={`${props.image_url}`} />
    <EventInfoContainer>
      <div>{props.start_time}</div>
      <div>{`Door open at ${props.arrival_time}`}</div>
      <div>{props.city}</div>
    </EventInfoContainer>
  </EventWrapper>
);

export default EventItem;
