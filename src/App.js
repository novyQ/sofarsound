import React from "react";
import moment from "moment";

import AppHeader from "./AppHeader/AppHeader";
import EventItem from "./EventItem/EventItem";
import { uniqBy } from "lodash";
import {
  AppWrapper,
  EventsContainer,
  SearchBarContainer,
  SearchBar,
  StyledCitySelect,
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

    if (!this.state.events) return <div>Loading</div>;

    return (
      <AppWrapper>
        <AppHeader />
        <SearchBarContainer>
          <SearchBar>
            <StyledCitySelect
              value={this.state.selectedCity && this.state.selectedCity}
              options={uniqBy(cityFilterOptions, "value")}
              onChange={this.handleCitySelect}
              placeholder='Filter by City'
              closeMenuOnSelect
              hideSelectedOptions={false}
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
          {displayedEvents.length > 0 ? (
            displayedEvents.map(event => (
              <EventItem {...event} key={event.id} />
            ))
          ) : (
            <div>No search result available, please reset your filter</div>
          )}
        </EventsContainer>
      </AppWrapper>
    );
  }
}

export default App;
