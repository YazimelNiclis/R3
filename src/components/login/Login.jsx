/* import React from "react"; */

import "./style.css";
/* import { useForm } from "react-hook-form"; */
/* import { iniciarSesion } from "../../api/Rule_auth"; */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUsuario } from "../../api/Rule_auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value.length === 0) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { email: email, password: password };
    if (!errorEmail && !errorPassword) {
      await loginUsuario(user)
        .then((resultado) => {
          alert(resultado.mensaje);
          navigate("/home", { replace: true });
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Las credenciales no son correctas"); //esto se manda a un servidor para corroborar las credenciales
    }
  };

  return (
    <div className="app">
      <main className="mainLogin">
        <form className="form" onSubmit={handleSubmit}>
          <p className="labelTitleML">E-mail:</p>
          <input
            className={`input-login ${errorEmail && "error"}`}
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
          {errorEmail && (
            <p style={{ color: "red" }}>Este campo es obligatorio</p>
          )}
          <p className="labelPassML">Contraseña:</p>
          <input
            className={`input-login ${errorPassword && "error"}`}
            required
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          {errorPassword && (
            <p style={{ color: "red" }}>
              La contraseña debe tener 8 caracteres mínimo
            </p>
          )}
          <button type="submit" className={"button"}>
            Iniciar Sesión
          </button>
        </form>
        <Link to={"/register"}>
          <button className={"button"}>Registrarme</button>
        </Link>
      </main>
    </div>
  );
}

export default Login;
