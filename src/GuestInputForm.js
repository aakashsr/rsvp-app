import React from 'react';

const GuestInputForm = ({ handleSubmit, handleInput, pendingGuest }) => {
  return (
    <form onSubmit={handleSubmit}>
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
