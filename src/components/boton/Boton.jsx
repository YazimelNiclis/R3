import React from "react";

function Boton(props) {
  return (
    <button onClick={() => props.funcion(props.label)}>{props.label}</button>
  );
}

export default Boton;
