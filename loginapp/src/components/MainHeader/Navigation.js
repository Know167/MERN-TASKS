import React,{useContext} from 'react';
import AuthContext from '../storage/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  const auth_ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {auth_ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {auth_ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {auth_ctx.isLoggedIn && (
          <li>
            <button onClick={auth_ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
