import React from 'react'

function Search(props) {
    const onInputChangeHandler = (event) => {
        
        props.onChangeValue(event.target.value.trim().toLowerCase());
        // console.log(value.length)
        // console.log(event.target.value.length)
    };
  return (
    <div>
      <input type="text" placeholder="Search" value={props.searchValue} onChange={onInputChangeHandler} />
    </div>
  );
}

export default Search
