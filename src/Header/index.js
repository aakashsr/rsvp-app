import React from "react";
import GuestInputForm from "./GuestInputForm";

const Header = ({ newGuestHandler, handleInput, pendingGuest }) => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>Created by Aakash Srivastava</p>
      <GuestInputForm
        newGuestHandler={newGuestHandler}
        handleInput={handleInput}
        pendingGuest={pendingGuest}
      />
    </header>
  );
};

export default Header;
