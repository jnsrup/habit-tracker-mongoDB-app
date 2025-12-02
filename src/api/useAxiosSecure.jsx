import axios from "axios"

 const instance = axios.create({
    baseURL:"http://localhost:3000"
 })
const useAxiosSecure = () =>{
    
    instance.interceptors.request.use((config) =>{
        console.log(config)
        return config
    })
    return instance;
}
export default useAxiosSecure;