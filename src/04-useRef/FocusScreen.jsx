import React, { useRef } from "react";

const FocusScreen = () => {

  const inputRef = useRef();
  console.log(inputRef)

  const onClick = () => {
    // document.querySelector("input").select();
    console.log(inputRef)
    inputRef.current.select();
  };

  return (
    <div>

      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    
    </div>
  );
};

export default FocusScreen;
