import React from 'react'
import User from './User';

function UserList(props) {

  return (
    <div className='container'>
      <ul className="list-group userlist">{props.Userlist.map((item) => (<User key={item.key } name={item.name} age={item.age } />))}</ul>
    </div>
  );
}

export default UserList
