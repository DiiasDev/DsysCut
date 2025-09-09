import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3005/api/barber"
})

export async function registerBarber(nome: string, telefone: string, expediente_inicio: string, expediente_fim: string, dias_expediente: string, ativo: boolean, criado_em: string) {
    try {
        const token = localStorage.getItem("token")
        const response = await api.post(
            '/register_barber',
            { nome, telefone, expediente_inicio, expediente_fim, dias_expediente, ativo, criado_em },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        const message = response.data

        return message
    } catch (error) {
        console.error('Erro ao registrar barbeiro', error)
        return error
    }
}

export async function getBarber(){
    try{
        const token = localStorage.getItem("token");
        const response = await api.get('barber', {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data?.message ?? []
    }catch(error){
        return error
    }
}