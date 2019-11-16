import React from "react";
import DatePicker from "react-datepicker";

import AppHeader from "./AppHeader/AppHeader";
import EventItem from "./EventItem/EventItem";
import CitySelect from "./CitySelect/CitySelect";
import { uniqBy } from "lodash";
import {
  AppWrapper,
  EventsContainer,
  SearchBar,
  SearchButton
} from "./App.styled";

import "react-datepicker/dist/react-datepicker.css";

class App extends React.Component {
  state = {
    events: [],
    searchClicked: false,
    filteredEvents: []
  };

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

  handleCitySelect = cityOption => {
    this.setState({
      selectedCity: cityOption.label
    });
  };

  handleDateSelect = date => {
    console.log("selected date", date);
    this.setState({
      selectedDate: date
    });
  };

  handleSearchClick = () => {
    console.log("select city", this.state.selectedCity);
    const filteredEvents = this.state.events.filter(
      event => event.city === this.state.selectedCity
    );
    this.setState({
      searchClicked: true,
      filteredEvents
    });
  };

  render() {
    console.log("events", this.state.events);

    const cityFilterOptions =
      this.state.events &&
      this.state.events.map(event => ({
        value: event.city,
        label: event.city
      }));

    const displayedEvents =
      this.state.selectedCity && this.state.searchClicked
        ? this.state.filteredEvents
        : this.state.events;

    return (
      <AppWrapper>
        <AppHeader />
        <SearchBar>
          <CitySelect
            placeholder='Filter by City'
            options={uniqBy(cityFilterOptions, "value")}
            onChange={this.handleCitySelect}
          />
          <DatePicker
            selected={this.state.selectedDate}
            onChange={this.handleDateSelect}
            placeholderText='Filter by Date'
          />
          <SearchButton onClick={this.handleSearchClick}>Search</SearchButton>
        </SearchBar>
        <EventsContainer>
          {this.state.events ? (
            displayedEvents.map(event => (
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
