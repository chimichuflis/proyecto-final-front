import API from "./API_rules";

export const contextualApi = async () => {
    let url = "/contextual/options";
    return await API.get(url)
        .then((resultado) => {
            return resultado.data;
        })
        .catch((error) => {
            throw error.response.data.error;
        });
};

export const createContextualPlaylistApi = async (body) => {
    console.log(body);
    let url = "/contextual/songs";
    return await API.post(url,body)
        .then((resultado) => {
            return resultado.data;
        })
        .catch((error) => {
            throw error.response.data.error;
        });
};
/*
router.post(                  // req.body = { activity: int, mood: int, weather: int, genre: [int,...] }
  "/contextual/songs",        // returns [ ]
  getContextualSongs
);
*/
