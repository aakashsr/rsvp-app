import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
// import Checkbox from "./Checkbox";

class App extends Component {
  state = {
    isChecked: false,
    pendingGuest: "",
    guests: []
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmationAt = id => this.toggleGuestProperty("isConfirmed", id);

  handleRemoveGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  toggleEditAt = id => this.toggleGuestProperty("isEditing", id);

  setNameAt = (name, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFilter = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  handleInput = event => {
    this.setState({
      pendingGuest: event.target.value
    });
  };

  // setNameAt = (name, indexToChange) => {
  //   const newState = { ...this.state };
  //   newState.guests[indexToChange].name = name;
  //   this.setState(newState);
  // };

  newGuestHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState(prevContacts => ({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...prevContacts.guests
      ],
      pendingGuest: ""
    }));
  };

  // toggleConformationAt = indexToChange => {
  //   const newState = { ...this.state };
  //   newState.guests[indexToChange].isConfirmed = !newState.guests[indexToChange]
  //     .isConfirmed;
  //   this.setState(newState);
  // };

  // toggleEditAt = indexToChange => {
  //   const newState = { ...this.state };
  //   newState.guests[indexToChange].isEditing = !newState.guests[indexToChange]
  //     .isEditing;
  //   this.setState(newState);
  // };

  // handleRemoveGuest = index => {
  //   let newState = { ...this.state };
  //   newState.guests.splice(index, 1);
  //   this.setState(newState);
  // };

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          newGuestHandler={this.newGuestHandler}
          handleInput={this.handleInput}
          pendingGuest={this.state.pendingGuest}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isChecked={this.state.isChecked}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConformationAt={this.toggleConfirmationAt}
          toggleEditAt={this.toggleEditAt}
          setNameAt={this.setNameAt}
          handleRemoveGuest={this.handleRemoveGuest}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
