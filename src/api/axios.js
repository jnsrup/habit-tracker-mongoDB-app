import axios from "axios";

const api = axios.create({
   baseURL: process.env.REACT_APP_API_BASE || "https://habittracker-server2.onrender.com",
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