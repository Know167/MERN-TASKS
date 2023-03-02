import "./App.css";
import UserList from "./UserList";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [Userlist, setUserList] = useState([
    { key: Math.random().toString(), name: "Max", age: "27" },
    { key: Math.random().toString(), name: "Jod", age: "23" },
  ]);

  function addingUserData(UserData) {
    setUserList((prevList) => [...prevList, UserData]);
  }

  return (
    <div className="App ">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />

      <Form onAddUserData={addingUserData} />
      <UserList Userlist={Userlist} />
    </div>
  );
}

export default App;
