import React from 'react';
import User from './User';
import './UsersList.css';

function UsersList(props) {
  
  return (
    <div className="userList">
      {/* {console.log(props.outputUsersList)} */}
      {props.outputUsersList.map((item) => {
        return <User key={item.id} id={item.id} name={item.name} />
      })}
    </div>
  );
}

export default UsersList
