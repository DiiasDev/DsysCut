import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3005/api/finance"
})

export async function RegisterFinance(valor: number, descricao: string, tipo: string, categoria: string, dataMovimentacao: Date) {
    try {
        const token = localStorage.getItem("token");
        const dateStr = dataMovimentacao instanceof Date
            ? dataMovimentacao.toISOString().slice(0, 10)
            : dataMovimentacao;
        const response = await api.post(
            '/registers',
            { valor, descricao, tipo, categoria, data_movimentacao: dateStr },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        const message = response.data;

        return message;
    } catch (error) {
        console.warn("ERRO: ", error);
        throw error;
    }
}

export async function getRegisters() {
    try {
        const token = localStorage.getItem("token");
        const response = await api.get('/get_registers', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data?.message ?? [];
    } catch (error) {
        console.error('Erro no getRegisters: ', error);
        return;
    }
}

export async function getTotalEntrada() {
    try {
        const token = localStorage.getItem("token");
        const response = await api.get('/total_entrada', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Erro:", error)
        return { total_entrada: 0 };
    }
}

export async function getTotalDespesa() {
    try {
        const token = localStorage.getItem("token");
        const response = await api.get("/total_despesa", {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("Erro", error)
        return { total_despesa: 0 };
    }
}

export async function getTotalSomado() {
    try {
        const token = localStorage.getItem("token");
        const response = await api.get('/total_somado', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.log("Erro", error)
        return { total_somado: 0 };
    }
}