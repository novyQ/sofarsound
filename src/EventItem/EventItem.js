import React from "react";

const EventItem = props => (
  <div>
    <img src={`${props.image_url}`} style={{ height: 80, width: "100%" }} />
  </div>
);

export default EventItem;
