import axios from "axios";
const url="http://localhost:8080/api/"
const api = {
    saludo: async () => {
        const result = axios.post(url+"saludo");
        return result.then((response) => response.data);
    },

    version: async () => {
        const result = axios.get(url+"version");
        return result.then((response) => response.data);
    },

  
}

export default api; 