import React from "react";
import { timeFormat } from "../helper";
import {
  EventWrapper,
  StyledImage,
  EventInfoContainer,
  StyledDate,
  ArrivalTime,
  City
} from "./EventItem.styles";

interface EventProps {
  image_url: string;
  start_time: string;
  arrival_time: string;
  city: string;
  event_url: string;
}

const EventItem = (props: EventProps) => {
  const handleEventClick = () => {
    window.open(props.event_url, "_blank");
  };

  console.log("props", props);
  return (
    <EventWrapper onClick={handleEventClick}>
      <StyledImage src={`${props.image_url}`} />
      <EventInfoContainer>
        <StyledDate date={props.start_time} format='dddd, Do MMMM YYYY' />
        <ArrivalTime>
          {`Door opens at ${timeFormat(props.arrival_time)}`}
        </ArrivalTime>
        <City>{props.city}</City>
      </EventInfoContainer>
    </EventWrapper>
  );
};

export default EventItem;
