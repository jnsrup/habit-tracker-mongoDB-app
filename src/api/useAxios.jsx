import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://habittracker-server2.onrender.com'
})

const useAxios = () =>{
   return axiosInstance;
}
export default useAxios;