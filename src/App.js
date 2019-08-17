import React, { Component } from "react";
import "./App.css";
import GuestLists from "./GuestLists";
import Counter from "./Counter";
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
        name: "Nic",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Matt K",
        isConfirmed: true,
        isEditing: true
      }
    ]
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

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevContacts => ({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
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
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInput}
              type="text"
              value={this.state.pendingGuest}
              placeholder="Invite Someone"
            />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input onChange={this.toggleFilter} type="checkbox" /> Hide those
              who haven't responded
            </label>
          </div>

          <Counter
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
          />

          <GuestLists
            guests={this.state.guests}
            isEditing={this.isEditing}
            toggleConformationAt={this.toggleConformationAt}
            toggleEditAt={this.toggleEditAt}
            setNameAt={this.setNameAt}
            isChecked={this.state.isChecked}
            handleRemoveGuest={this.handleRemoveGuest}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
