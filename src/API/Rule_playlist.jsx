import API from "./API_rules";

export const playlists = async (queryParam) => {
  let url = "/playlist";
  return await API.get(url + queryParam)
    .then((resultado) => {
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
