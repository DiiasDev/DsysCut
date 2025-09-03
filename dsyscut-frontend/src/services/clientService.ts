import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3005/api/client"
})

export async function registerClient(formData: FormData) {
    try {
        const token = localStorage.getItem("token");
        const response = await api.post('/register_client',
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        const message = response.data
        return message
    } catch (error) {
        return error
    }
}

export async function getClient() {
    try {
        const token = localStorage.getItem("token");
        const response = await api.get('/get_client', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data?.message ?? [];
    } catch (error) {
        return error
    }
}