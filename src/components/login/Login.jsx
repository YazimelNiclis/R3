/* import React from "react"; */
import "./style.css";
/* import { useForm } from "react-hook-form"; */
/* import { iniciarSesion } from "../../api/Rule_auth"; */
/* import { useNavigate } from "react-router-dom"; */
import { useState } from "react";

function Login() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorEmail && !errorPassword) {
      alert("El mail es: " + email + "y la contrasenia: " + password); //esto se manda a un servidor para corroborar las credenciales
    } else {
      alert("La informacion ingresada es incorrecta");
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
      </main>
    </div>
  );
}

export default Login;