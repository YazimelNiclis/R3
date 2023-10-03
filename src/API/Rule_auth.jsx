import api from "./Rule_api";
import { useNavigate } from "react-router-dom";

export const registrarUsuario = async (user) => {
  let url = "/auth/register";
  return await api
    .post(url, user)
    .then((resultado) => {
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const loginUsuario = async (user) => {
  let url = "/auth/login";
  return await api
    .post(url, user)
    .then((resultado) => {
      localStorage.setItem("token", resultado.data.token);
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const logout = () => {
  localStorage.removeItem("token");
};

//3)FRONT.        Necesita del back. Pero para plantear el maqueteado tampoco necesita de nadie. Disenio de interfaz.

//ya esta planteado el axios. La conexion con el backend
//1) Tienen que ver donde NECESITAN la conexion con el backend. En que componente.  Inicio de usuario.
//2) Creo un API/Rule_Necesidad. Y hago el endpoint
//3) Uso el endpoint donde lo necesito.

//2)BACK (API).   Necesita de la bd. Pero para plantear la estructura tampoco necesita de nadie. Middlewares, estructura.
//1)BASE DE DATOS Necesita del front. Para llenarse de datos. Pero para la estructura no necesita de nadie.
