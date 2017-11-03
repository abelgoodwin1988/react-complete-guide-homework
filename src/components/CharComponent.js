import React from 'react';

const charComponentStyle = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
}

const CharComponent = (props) => {
  return (
    <div style={charComponentStyle}>
      {props.value}
    </div>
  );
}

export default CharComponent;
