import React from 'react';

const CharComponent = (props) => {
  return (
    <div className="column is-2">
      <div className="card">
        <div className="card-content">
          <div className="columns">
            <div className="column">
              <p className="title" onClick={props.click}>{props.value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharComponent;
