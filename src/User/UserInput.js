import React from 'react';

const UserInput = (props) => {
  return(
    <div>
      <input onChange={props.change} value={props.input}/>
    </div>
  );
}

export default UserInput;
