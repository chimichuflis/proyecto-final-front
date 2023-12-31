import API from "./API_rules";

export const login = async (profile, password) => {
    let url = "/user/login";
    /* return await API.post(url, { profile: profile, password: password })
        .then((resultado) => {
            return resultado.data;
        })
        .catch((error) => {
            throw error.response.data.error;
        }); */
    try {
        const result = await API.post(url, { profile: profile, password: password })
        return result.data;
    } catch (err) { console.log(err) }
};

export const available = async (email) => {
    let url = "/user/available";
    /* return await API.post(url, { email: email })
        .then((resultado) => {
            return resultado.data;
        })
        .catch((error) => {
            throw error.response.data.error;
        }); */
    try {
        const result = await API.post(url, { email: email })
        return result.data;
    } catch (err) { console.log(err) }
}