import React, { useEffect, useState } from "react";
import Logo from "../components/header/Logo";
import Cuerpo from "../components/cuerpo/Cuerpo";
import Boton from "../components/boton/Boton";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { getClientes } from "../API/Rule_clientes";
import { logout } from "../api/Rule_auth";

function Inicio() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [mostrarCodigo, setMostrarCodigo] = useState(false);
  const [cambiarFuente, setCambiarFuente] = useState(false);

  const [clientes, setClientes] = useState(null);
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

  const logoutfunction = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    listaClientes();
  }, []);

  const listaClientes = async () => {
    await getClientes()
      .then((resultado) => {
        setClientes(resultado);
      })
      .catch((error) => {
        alert(error);
        navigate("/");
      });
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
          <Boton label={`LogOut`} funcion={logoutfunction} />

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
          {clientes && (
            <ul style={{ listStyle: "none" }}>
              {clientes.map((cliente) => {
                return (
                  <li key={cliente.clienteid}>
                    {cliente.nombrecia} - {cliente.direccioncli}
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
