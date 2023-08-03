import { useState } from "react";
import "./App.css";
import Logo from "./components/header/Logo";
import Cuerpo from "./components/cuerpo/Cuerpo";

function App() {
  const [count, setCount] = useState(0);

  const [mostrarCodigo, setMostrarCodigo] = useState(false);
  const [cambiarFuente, setCambiarFuente] = useState(false);

  const sumarContador = () => {
    setCount(count + 1);
  };

  const actualizarCodigo = () => {
    setMostrarCodigo(!mostrarCodigo);
  };

  const actualizarFuente = () => {
    setCambiarFuente(!cambiarFuente);
  };

  return (
    <>
      <Logo
        titulo="Bienvenido a React + Vite"
        subtitulo="Introduccion a React y Vite"
        cuerpo="lorem ipsum"
      />
      <div className="card">
        <button onClick={() => sumarContador()}>Count is {count}</button>
        <button onClick={() => actualizarCodigo()}>Mostrar codigo?</button>
        <button onClick={() => actualizarFuente()}>Actualizar fuente</button>

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
      </p>
    </>
  );
}

export default App;
