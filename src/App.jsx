import { useState } from "react";
import "./App.css";
import Logo from "./components/header/Logo";
import Cuerpo from "./components/cuerpo/Cuerpo";
import Boton from "./components/boton/Boton";
import Login from "./components/login/Login";

function App() {
  const [count, setCount] = useState(0);

  const [mostrarCodigo, setMostrarCodigo] = useState(false);
  const [cambiarFuente, setCambiarFuente] = useState(false);

  const sumarContador = (nombre) => {
    setCount(count + 1);
    alert(`se toco el boton ${nombre}`);
  };

  const actualizarCodigo = (nombre) => {
    setMostrarCodigo(!mostrarCodigo);
    alert(`se toco el boton ${nombre}`);
  };

  const actualizarFuente = (nombre) => {
    setCambiarFuente(!cambiarFuente);
    alert(`se toco el boton ${nombre}`);
  };

  /*  const infoBoton = (nombre) => {
    alert(`se toco el boton ${nombre}`);
  }; */

  return (
    <>
      {/*  <Logo
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
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Login />
    </>
  );
}

export default App;
