import React, { Component } from "react";
import "./App.css";
import GuestLists from "./GuestLists";

class App extends Component {
  state = {
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
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>

          <GuestLists
            guests={this.state.guests}
            isEditing={this.isEditing}
            toggleConformationAt={this.toggleConformationAt}
            toggleEditAt={this.toggleEditAt}
            setNameAt={this.setNameAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
