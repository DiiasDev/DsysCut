import { useState } from "react";
import { register } from "../services/authService";

export function useRegister() {
    const [loading, setloading] = useState(false);

    async function handleRegister(name: string, email: string, password: string, telefone: string) {
        setloading(true);
        try {
            const user = await register(name, email, password, telefone);
            if (user && user.status === "sucess") {
                return user;
            }
        } catch (error: any) {
        } finally {
            setloading(false)
        }
    }

    return {handleRegister, loading}
}