import React, { useState } from "react";
import Logo from "../components/header/Logo";
import Cuerpo from "../components/cuerpo/Cuerpo";
import Boton from "../components/boton/Boton";
import "../App.css";
import { Link } from "react-router-dom";
function Inicio() {
  const [count, setCount] = useState(0);

  const [mostrarCodigo, setMostrarCodigo] = useState(false);
  const [cambiarFuente, setCambiarFuente] = useState(false);

  const sumarContador = (nombre) => {
    setCount(count + 1);
  };

  const actualizarCodigo = (nombre) => {
    setMostrarCodigo(!mostrarCodigo);
  };

  const actualizarFuente = (nombre) => {
    setCambiarFuente(!cambiarFuente);
  };
  return (
    <>
      <div className="contenedor">
        <Logo
          titulo="Bienvenido a React + Vite"
          subtitulo="Introduccion a React y Vite"
          cuerpo="lorem ipsum"
        />
        <div className="card">
          <Boton label={`Count is ${count}`} funcion={sumarContador} />
          <Boton label={`Mostrar codigo?`} funcion={actualizarCodigo} />
          <Boton label={`Actualizar fuente`} funcion={actualizarFuente} />

          <Cuerpo
            cambiarFuente={cambiarFuente}
            mostrarCodigo={mostrarCodigo}
            texto="Edit "
            codigo="src/App.jsx"
            texto2=" and save to test HMR"
          />
          <Link to={"/"}>
            <p>Volver al inicio</p>
          </Link>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default Inicio;
