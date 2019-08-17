import React from 'react'

const Guest = props => (
  <li key={props.index}>
    <span>{props.name}</span>
    <label>
      <input
        onChange={props.handleConformationAt}
        type="checkbox"
        checked={props.isConfirmed}
      />
      Confirmed
    </label>
    <button>edit</button>
    <button>remove</button>
  </li>
);

export default Guest ;
