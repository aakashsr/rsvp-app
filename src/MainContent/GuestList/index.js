import React from "react";
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

const GuestLists = ({
  guests,
  pendingGuest,
  isChecked,
  toggleConformationAt,
  toggleEditAt,
  setNameAt,
  handleRemoveGuest
}) => {
  return (
    <ul>
      <PendingGuest name={pendingGuest} />
      {guests
        .filter(guest => !isChecked || guest.isConfirmed)
        .map((guest, index) => (
          <Guest
            key={index}
            name={guest.name}
            isEditing={guest.isEditing}
            isConfirmed={guest.isConfirmed}
            handleConformationAt={() => toggleConformationAt(guest.id)}
            handleEditAt={() => toggleEditAt(guest.id)}
            setName={text => setNameAt(text, guest.id)}
            handleRemove={() => handleRemoveGuest(guest.id)}
          />
        ))}
    </ul>
  );
};

export default GuestLists;
