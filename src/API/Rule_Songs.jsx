import API from "./API_rules";

export const songs = async () => {
  let url = "/test";
  return await API.get(url)
    .then((resultado) => {
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
