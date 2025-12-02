import axios from "axios";

const api = axios.create({
   baseURL: process.env.REACT_APP_API_BASE || "http://localhost:3000",
   timeout:15000,
   headers:{
    "Content-Type" : "application/json",

   },

});

api.interceptors.request.use(
(config) =>{
    return config;
}, 
(error) => Promise.reject(error)
);
export default api;