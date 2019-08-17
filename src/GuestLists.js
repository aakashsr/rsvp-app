import React from "react";
import Guest from "./Guest";

const GuestLists = props => {
  return (
    <ul>
      {props.guests.map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isEditing={guest.isEditing}
          isConfirmed={guest.isConfirmed}
          handleConformationAt={() => props.toggleConformationAt(index)}
          handleEditAt={() => props.toggleEditAt(index)}
          setName={(text) => props.setNameAt(text,index)}
        />
      ))}
    </ul>
  );
};

export default GuestLists;
