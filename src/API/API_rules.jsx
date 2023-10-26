import axios from "axios";

//conexion con back

const api = axios.create({
    baseURL: "http://localhost:8009/api",
    headers: {
        "Content-Type": "application/json",
    },
});

//Funcion que intercepta las request

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;