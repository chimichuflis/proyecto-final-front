import API from "./API_rules";

export const playlists = async (value) => {
  let url = "/playlists";
  return await API.post(url, { value: value })
    .then((resultado) => {
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
