import api from "./Rule_api";

export const getClientes = async () => {
  let url = "/listaClientes";
  return await api
    .get(url)
    .then((resultado) => {
      console.log(resultado);
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
