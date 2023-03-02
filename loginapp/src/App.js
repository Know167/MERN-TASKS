import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/storage/auth-context";

function App() {
  const auth_ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader onLogout={auth_ctx.onLogout} />
      <main>
        {!auth_ctx.isLoggedIn && <Login onLogin={auth_ctx.onLogin} />}
        {auth_ctx.isLoggedIn && <Home onLogout={auth_ctx.onLogout} />}
      </main>
    </>
  );
}

export default App;
