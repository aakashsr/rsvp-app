import React from "react";

const PendingGuest = ({name}) => {
  if (name) {
    return (
      <li className="pending">
        <span>{name}</span>
      </li>
    );
  }
  return null;
};

export default PendingGuest;
