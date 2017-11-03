import React from 'react';


const ValidationComponent = (props) => {

  let strValidated = null;

  if(props.inputValue < 5) {
    strValidated = 'Text too short';
  } else {
    strValidated = 'Text long enough';
  }
  return <p>{strValidated}</p>;
}

export default ValidationComponent;
