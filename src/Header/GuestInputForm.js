import React from 'react';

const GuestInputForm = ({ newGuestHandler, handleInput, pendingGuest }) => {
  return (
    <form onSubmit={newGuestHandler}>
      <input
        onChange={handleInput}
        type="text"
        value={pendingGuest}
        placeholder="Invite Someone"
      />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default GuestInputForm;
