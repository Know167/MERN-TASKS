import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./Form.css";
import ErrorModal from "./ErrorModal";

function Form(props) {
  const Userage = useRef();
  const Username = useRef();
  const [errorState, setErrorState] = useState({
    title: "hello",
    message: "motto",
  });



  function AddUserHandler(event) {
    event.preventDefault();
    if (
      Userage.current.value.trim().length === 0 ||
      Username.current.value.trim().length === 0
    ) {
      setErrorState({ title: "Empty Input", message: "Enter a valid input!" });
      return;
    }
    if (+Userage < 1) {
      setErrorState({ title: "Invalid age", message: "Enter age > 0" });
      return;
    }

    const userData = {
      key: Math.random().toString(),
      name: Username.current.value,
      age: Userage.current.value,
    };
    props.onAddUserData(userData);
    Username.current.value = '';
    Userage.current.value = '';
  }
  function onConfirm() {
    setErrorState(null);
  }
  return (
    <div>
      <form>
        <div className="form container">
          <div className="username m-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
              ref={Username}
            />
          </div>
          <div className="age m-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="age"
              max={100}
              min={18}
              ref={Userage}
            />
          </div>
          <div className="m-3">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={AddUserHandler}>
              Add User
            </button>
          </div>
        </div>
      </form>

      {ReactDOM.createPortal(
        errorState && (
          <ErrorModal
            title={errorState.title}
            message={errorState.message}
            onConfirm={onConfirm}
          />
        ),
        document.getElementById("modal")
      )}
    </div>
  );
}

export default Form;
