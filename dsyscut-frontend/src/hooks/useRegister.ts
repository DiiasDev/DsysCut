import { useState } from "react";
import { register } from "../services/authService";

export function useRegister() {
    const [loading, setloading] = useState(false);

    async function handleRegister(name: string, email: string, password: string, telefone: string) {
        setloading(true);
        try {
            const user = await register(name, email, password, telefone);
            if (user && user.status === "Sucess") {
                return user;
            } else {
                // Retorna erro do backend ou mensagem padrão
                return { error: user?.message || 'Erro ao registrar usuário' };
            }
        } catch (error: any) {
            return { error: error.response?.data?.message || error.message || 'Erro ao registrar usuário' };
        } finally {
            setloading(false)
        }
    }

    return {handleRegister, loading}
}