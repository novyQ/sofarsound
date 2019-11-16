import React from "react";
import AppHeader from "./AppHeader/AppHeader";
//import logo from "./logo.svg";
import { AppWrapper } from "./App.styled";

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
      </AppWrapper>
    );
  }
}

export default App;
