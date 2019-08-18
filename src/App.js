import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
// import Checkbox from "./Checkbox";

class App extends Component {
  state = {
    isChecked: false,
    pendingGuest: "",
    guests: [
      {
        name: "Treasure",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Matt K",
        isConfirmed: false,
        isEditing: true
      },
      {
        name: "Nic",
        isConfirmed: true,
        isEditing: false
      }
    ]
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };

  handleInput = event => {
    this.setState({
      pendingGuest: event.target.value
    });
  };

  toggleConformationAt = indexToChange => {
    const newState = { ...this.state };
    newState.guests[indexToChange].isConfirmed = !newState.guests[indexToChange]
      .isConfirmed;
    this.setState(newState);
  };

  toggleEditAt = indexToChange => {
    const newState = { ...this.state };
    newState.guests[indexToChange].isEditing = !newState.guests[indexToChange]
      .isEditing;
    this.setState(newState);
  };

  setNameAt = (name, indexToChange) => {
    const newState = { ...this.state };
    newState.guests[indexToChange].name = name;
    this.setState(newState);
  };

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

  handleRemoveGuest = index => {
    let newState = { ...this.state };
    newState.guests.splice(index, 1);
    this.setState(newState);
  };

  // handleFilter = () => {
  //   this.setState(currentState => ({
  //     guests: currentState.guests.filter(guest => {
  //       if (this.state.checked) {
  //         return guest.isConfirmed === true;
  //       }
  //       return guest;
  //     })
  //   }));
  // };

  toggleFilter = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  // toggleConformationAt = indexToChange =>
  //   this.setState({
  //     guests: this.state.guests.map((guest, index) => {
  //       if (indexToChange === index) {
  //         return {
  //           ...guest,
  //           isConfirmed: !guest.isConfirmed
  //         };
  //       }
  //       return guest;
  //     })
  //   });

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
          guests={this.state.guests}
          isEditing={this.isEditing}
          toggleConformationAt={this.toggleConformationAt}
          toggleEditAt={this.toggleEditAt}
          setNameAt={this.setNameAt}
          isChecked={this.state.isChecked}
          handleRemoveGuest={this.handleRemoveGuest}
          pendingGuest={this.state.pendingGuest}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
        />
      </div>
    );
  }
}

export default App;
