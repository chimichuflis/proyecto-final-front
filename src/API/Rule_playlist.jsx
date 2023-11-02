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

export const createPlaylists = async (user_id, playlist_name) => {
  let url = "/playlist/create";
  return await API.post(url, { user_id: user_id, playlist_name: playlist_name })
    .then((resultado) => {
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
