import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3005/api/finance"
})

export async function RegisterFinance(valor: number, descricao: string, tipo: string[], categoria: string){
    try{
        const response = await api.post('/registers', {valor,descricao,tipo,categoria})
        const message = response.data

        return message
    }catch(error){
        console.warn("ERRO: ",error)
        throw error
    }
}

export async function getTotalEntrada(){
    try{
        const response = await api.get('/total_entrada');
        return response.data?.total_entrada ?? 0;
    } catch(error){
        console.error("Erro:", error)
        return 0;
    }
}

export async function getTotalDespesa(){
    try{
        const response = await api.get("/total_despesa")
        return response.data?.total_despesa ?? 0;
    }catch(error){
        console.error("Erro", error)
        return 0;
    }
}

export async function getTotalSomado(){
    try{
        const response = await api.get('total_somado')
        return response.data?.total_somado ?? 0; 
    } catch(error){
        console.log("Erro", error)
        return
    }
}