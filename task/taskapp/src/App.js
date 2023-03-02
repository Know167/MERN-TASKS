import "./App.css";
import React, { useEffect, useState } from "react";
import List1 from "./List1";
import List2 from "./List2";
import Search from "./Search";

function App() {
  const [listNum, setListNum] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    let intervalId = setInterval(() => {
      // setList(List[+num]);
      // setOutputUserList(list);
      setListNum((prevListNum) => !prevListNum);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [listNum]);


  return (
    <div className="container-fluid">
      <Search value={searchValue} onChangeValue={setSearchValue} />
      {listNum ? (
        <List1 searchVal={searchValue} />
      ) : (
        <List2 searchVal={searchValue} />
      )}
    </div>
  );
}

export default App;
