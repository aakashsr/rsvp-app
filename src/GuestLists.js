import React from "react";
import Guest from "./Guest";

const GuestLists = props => {
  return (
    <ul>
      {props.guests.map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          handleConformationAt={() => props.toggleConformationAt(index)}
        />
      ))}
    </ul>
  );
};

export default GuestLists;
