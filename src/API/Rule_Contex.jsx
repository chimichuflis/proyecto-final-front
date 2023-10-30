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