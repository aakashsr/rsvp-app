import React from 'react';
import GuestLists from "./GuestLists";
import Counter from "./Counter";
import ConfirmedFilter from "./ConfirmedFilter";

const MainContent = ({toggleFilter, totalInvited, numberAttending ,numberUnconfirmed,guests,isEditing ,toggleConformationAt,toggleEditAt,setNameAt,isChecked,handleRemoveGuest ,pendingGuest}) => {
  return (
    <div className="main">
      <ConfirmedFilter toggleFilter={toggleFilter} />

      <Counter
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
      />

      <GuestLists
        guests={guests}
        isEditing={isEditing}
        toggleConformationAt={toggleConformationAt}
        toggleEditAt={toggleEditAt}
        setNameAt={setNameAt}
        isChecked={isChecked}
        handleRemoveGuest={handleRemoveGuest}
        pendingGuest={pendingGuest}
      />
    </div>
  );
};

export default MainContent;
