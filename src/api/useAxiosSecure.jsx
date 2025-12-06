import axios from "axios"

 const instance = axios.create({
    baseURL:"https://habittracker-server2.onrender.com"
 })
const useAxiosSecure = () =>{
    
    instance.interceptors.request.use((config) =>{
        console.log(config)
        return config
    })
    return instance;
}
export default useAxiosSecure;