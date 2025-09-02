import { useState } from "react";
import { login } from "../services/authService";
import { useAppStore } from "../store/store";

export function useLogin() {
    const setIsLogged = useAppStore((state) => state.setIsLogged);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleLogin(usuario: string, password: string) {
        setLoading(true);
        setError(null);
        try {
            const user = await login(usuario, password);
            if (user && user.status === "Sucess") {
                return user;
            } else {
                setError(user?.message || 'Usuário ou senha inválidos');
                setIsLogged(false);
                return null;
            }
        } catch (error: any) {
            // Se o backend retornar 401, a mensagem estará em error.response.data.message
            const message = error.response?.data?.message || error.message || 'Erro ao fazer login';
            setError(message);
            setIsLogged(false);
            return null;
        } finally {
            setLoading(false);
        }
    }

    return { handleLogin, loading, error };
}