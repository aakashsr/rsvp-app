import React from "react";
import GuestName from "./GuestName";

const Guest = ({
  index,
  isEditing,
  name,
  setName,
  handleConformationAt,
  isConfirmed,
  handleEditAt,
  idEditing,
  handleRemove
}) => (
  <li key={index}>
    <GuestName
      isEditing={isEditing}
      name={name}
      handleNameEdits={e => setName(e.target.value)}
    >
      {name}
    </GuestName>
    <label>
      <input
        onChange={handleConformationAt}
        type="checkbox"
        checked={isConfirmed}
      />
      Confirmed
    </label>
    <button onClick={handleEditAt}>{isEditing ? "Save" : "Edit"}</button>
    <button onClick={handleRemove}>remove</button>
  </li>
);

export default Guest;
