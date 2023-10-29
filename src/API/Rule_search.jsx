import API from "./API_rules";

export const searchApi = async (value) => {
  let url = "/song/search";
  return await API.post(url, { value: value })
    .then((resultado) => {
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};
