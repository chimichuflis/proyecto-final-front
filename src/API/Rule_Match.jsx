import API from "./API_rules";

export const getMatches = async () => {
  let url = "/match";
  try {
    const result = await API.get(url)
    return result.data;
  } catch (err) { console.log(err) }
};

export const createMatchPlaylistApi = async (body) => {
    let url = "/match/playlist";
    return await API.post(url,body)
        .then((resultado) => {
            return resultado.data;
        })
        .catch((error) => {
            throw error.response.data.error;
        });
};
