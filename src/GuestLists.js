import React from "react";
import Guest from "./Guest";

const GuestLists = props => {
  console.log(props.isChecked);
  return (
    <ul>
      {props.guests
      .filter(guest => !props.isChecked || guest.isConfirmed)
      .map((guest, index) => (
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
