import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";

import AppHeader from "./AppHeader/AppHeader";
import EventItem from "./EventItem/EventItem";
import CitySelect from "./CitySelect/CitySelect";
import { uniqBy } from "lodash";
import {
  AppWrapper,
  EventsContainer,
  SearchBarContainer,
  SearchBar,
  StyledDatePicker,
  ResetFilters,
  SearchButton
} from "./App.styled";

import "react-datepicker/dist/react-datepicker.css";

class App extends React.Component {
  state = {
    events: [],
    filteredEvents: [],
    searchClicked: false,
    selectedCity: null,
    selectedDate: null
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
    this.setState({
      selectedDate: date
    });
  };

  handleSearchClick = () => {
    let filteredEvents = this.state.events;

    if (this.state.selectedCity) {
      filteredEvents = this.state.events.filter(
        event => event.city === this.state.selectedCity
      );
    }

    if (this.state.selectedDate) {
      filteredEvents = this.state.events.filter(event => {
        const eventDate = moment(new Date(event.start_time), "MM/DD/YYYY");
        const selectedDate = moment(this.state.selectedDate, "MM/DD/YYYY");
        return eventDate.isSame(selectedDate, "date") === true;
      });
    }

    this.setState({
      searchClicked: true,
      filteredEvents
    });
  };

  handleResetFilters = () => {
    this.setState({
      searchClicked: false,
      selectedCity: null,
      selectedDate: null
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

    const displayedEvents = this.state.searchClicked
      ? this.state.filteredEvents
      : this.state.events;

    return (
      <AppWrapper>
        <AppHeader />
        <SearchBarContainer>
          <SearchBar>
            <CitySelect
              value={this.state.selectedCity}
              placeholder='Filter by City'
              options={uniqBy(cityFilterOptions, "value")}
              onChange={this.handleCitySelect}
            />
            <StyledDatePicker
              selected={this.state.selectedDate}
              onChange={this.handleDateSelect}
              placeholderText='Filter by Date'
            />
            <ResetFilters
              onClick={this.handleResetFilters}
              isShown={this.state.selectedCity || this.state.selectedDate}
            >
              Reset Filters
            </ResetFilters>
            <SearchButton onClick={this.handleSearchClick}>Search</SearchButton>
          </SearchBar>
        </SearchBarContainer>
        <EventsContainer>
          {this.state.events ? (
            displayedEvents.map(event => (
              <EventItem {...event} key={event.id} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </EventsContainer>
      </AppWrapper>
    );
  }
}

export default App;
