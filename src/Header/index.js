import React from "react";
import GuestInputForm from "./GuestInputForm";

const Header = ({ handleSubmit, handleInput, pendingGuest }) => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>Created by Aakash Srivastava</p>
      <GuestInputForm
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        pendingGuest={pendingGuest}
      />
    </header>
  );
};

export default Header;
