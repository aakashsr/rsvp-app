import React from 'react';

const ConfirmedFilter = ({toggleFilter,isChecked}) => {
    return (
      <div>
        <h2>Invitees</h2>
        <label>
          <input onChange={toggleFilter} type="checkbox" checked={isChecked}/> Hide those
          who haven't responded
        </label>
      </div>
    );
}

export default ConfirmedFilter;
