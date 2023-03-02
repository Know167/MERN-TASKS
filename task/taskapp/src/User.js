import React from "react";
import './User.css';

function User(props) {
  
  return (
    <div className="nameDisplay">
      {props.name.salutation} {props.name.first} {props.name.last}
      
    </div>
  );
}

export default User;
