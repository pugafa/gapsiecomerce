import axios from "axios";
const url="http://localhost:8080/api/login"
const apilogin = {
    

 
    login: async (data) => {
        const result = axios.post(`${url}`,{username:data.username, contrasena: data.contrasena}, {
            timeout: 5000,
            
            });
        return result.then((response) => response.data)
    },
  
}

export default apilogin; 