import axios from "axios";

const token=sessionStorage.getItem('token');

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 1000,
    headers: {'Authorization': `Bearer ${token}`
}
})
const api = {
    getAllData: async () => {
        const result = instance.get('proveedores');
        return result.then((response) => response.data);
    },

    getOne: async (id) => {
        console.log("getting");
        const result = instance.get(`proveedores/${id}`);
        return result.then((response) => response.data);
    },
    createProveedor: async (data) => {
        const result = instance.post(`proveedores`, data)
        return result.then((response) => response.data)
    },
    editProveedor: async (id, data) => {
        const result = instance.put(`proveedores/${id}`, data);
        return result.then((response) => response.data)
    },
    deleteProveedor: async (items) => {
        const result = instance.delete(`proveedores/`, { data: items });
        return result.then((response) => response.data)
    }
}

export default api; 