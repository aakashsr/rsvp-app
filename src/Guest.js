import React from "react";
import GuestName from "./GuestName";

const Guest = props => (
  <li key={props.index}>
    <GuestName
      isEditing={props.isEditing}
      name={props.name}
      handleNameEdits={e => props.setName(e.target.value)}
    >
      {props.name}
    </GuestName>
    <label>
      <input
        onChange={props.handleConformationAt}
        type="checkbox"
        checked={props.isConfirmed}
      />
      Confirmed
    </label>
    <button onClick={props.handleEditAt}>
    {
      (props.isEditing)?"Save":"Edit"
    }
    </button>
    <button>remove</button>
  </li>
);

export default Guest;
