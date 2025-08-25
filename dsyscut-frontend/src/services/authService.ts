import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3005/api'
});

export async function login(email: string, password: string) {
    try {
        const response = await api.post('/login', { email, password });
        console.log("RESPONSE: ",response)

        const token = response.data.token; 

        localStorage.setItem("token", token)
        return response.data;
    } catch (error) {
        throw error
    }
}

export async function register(name: string, email: string, password: string, telefone: string) {
    try {
        const response = await api.post('/create-user', { name, email, password, telefone })
        console.log('Sucesso ao cadastrar usuário')
        return response.data
    } catch (error) {
        console.error('erro ao cadastrar usuário', error)
    }
}