import React from "react";
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

const GuestLists = props => {
  console.log(props.isChecked);
  return (
    <ul>
      <PendingGuest name={props.pendingGuest} />
      {props.guests
        .filter(guest => !props.isChecked || guest.isConfirmed)
        .map((guest, index) => (
          <Guest
            key={index}
            name={guest.name}
            isEditing={guest.isEditing}
            isConfirmed={guest.isConfirmed}
            handleConformationAt={() => props.toggleConformationAt(guest.id)}
            handleEditAt={() => props.toggleEditAt(guest.id)}
            setName={text => props.setNameAt(text, guest.id)}
            handleRemove={() => props.handleRemoveGuest(guest.id)}
          />
        ))}
    </ul>
  );
};

export default GuestLists;
