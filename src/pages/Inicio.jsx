import React, { useEffect, useState } from "react";
import Logo from "../components/header/Logo";
import Cuerpo from "../components/cuerpo/Cuerpo";
import Boton from "../components/boton/Boton";
import "../App.css";
import { Link } from "react-router-dom";
function Inicio() {
  const [count, setCount] = useState(0);
  const [mostrarCodigo, setMostrarCodigo] = useState(false);
  const [cambiarFuente, setCambiarFuente] = useState(false);

  const [peliculas, setPeliculas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sumarContador = () => {
    setCount(count + 1);
  };

  const actualizarCodigo = () => {
    setMostrarCodigo(!mostrarCodigo);
  };

  const actualizarFuente = () => {
    setCambiarFuente(!cambiarFuente);
  };

  useEffect(() => {
    fetch("http://localhost:3000/peliculas")
      .then((response) => {
        if (!response.ok) {
          setError(
            "No se han encontrado peliculas o hay algun error, intente recargar la pagina"
          );
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPeliculas(data);
      })
      .catch((error) => {
        setError("Error del lado del servidor");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
        <div>
          {isLoading && <div>Cargando...</div>}
          {error && <div>Error: {error}</div>}
          {peliculas && (
            <ul style={{ listStyle: "none" }}>
              {peliculas.map((pelicula) => {
                return (
                  <li key={pelicula.id}>
                    {pelicula.nombre} - {pelicula.director}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default Inicio;
