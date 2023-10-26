import API from "./API_rules";

export const login = async (email, password) => {
    let url = "/user/login";
    return await API.post(url, { email: email, password: password })
        .then((resultado) => {
            return resultado.data;
        })
        .catch((error) => {
            throw error.response.data.error;
        });
};

export const available = async (email) => {
    let url = "/user/available";
    return await API.post(url, { email: email })
        .then((resultado) => {
            return resultado.data;
        })
        .catch((error) => {
            throw error.response.data.error;
        });
}