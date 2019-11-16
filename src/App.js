import React from "react";
import AppHeader from "./AppHeader/AppHeader";
import EventItem from "./EventItem/EventItem";
import { AppWrapper, EventsContainer } from "./App.styled";

class App extends React.Component {
  state = {};

  componentDidMount = async () => {
    fetch("https://app.staging.sofarsounds.com/api/v1/events")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            events: result
          });
        },
        error => {
          console.log("error", error);
        }
      );
  };

  render() {
    console.log("events", this.state.events);
    return (
      <AppWrapper>
        <AppHeader />
        <div>Search bar</div>
        <EventsContainer>
          {this.state.events ? (
            this.state.events.map(event => (
              <EventItem {...event} key={event.id} />
            ))
          ) : (
            <div>Loading</div>
          )}
        </EventsContainer>
      </AppWrapper>
    );
  }
}

export default App;
