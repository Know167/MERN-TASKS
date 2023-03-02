import React from 'react'

function User(props) {
  return (
    <div>
          <li className="list-group-item border border-dark my-2 rounded-3">{props.name} {props.age }</li>
    </div>
  );
}

export default User
