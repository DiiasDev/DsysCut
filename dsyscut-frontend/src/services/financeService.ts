import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3005/api/finance"
})

export async function RegisterFinance(valor: number, descricao: string, tipo: string[], categoria: string){
    try{
        const response = await api.post('/registers', {valor,descricao,tipo,categoria})
        const message = response.data
        console.log("Sucesso ao cadastrar registro financeiro") 

        return message
    }catch(error){
        console.warn("ERRO: ",error)
        throw error
    }
}

export async function getTotalEntrada(){
    try{
        const response = await api.get('/total_entrada');
        return response.data.total_entrada;
    } catch(error){
        console.error("Erro:", error)
    }
}