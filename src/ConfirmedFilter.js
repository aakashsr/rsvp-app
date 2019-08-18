import React from 'react';

const ConfirmedFilter = ({toggleFilter}) => {
    return (
      <div>
        <h2>Invitees</h2>
        <label>
          <input onChange={toggleFilter} type="checkbox" /> Hide those
          who haven't responded
        </label>
      </div>
    );
}

export default ConfirmedFilter;
