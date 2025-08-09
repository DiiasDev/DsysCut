import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3005/api'
});

export async function login(email: string, password: string) {
    try {
        const response = await api.post('/login', { email, password });
        return response.data;
    } catch (error) {
        throw error
    }
}