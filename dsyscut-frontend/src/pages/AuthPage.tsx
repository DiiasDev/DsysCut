import { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import CadastroForm from "../components/CadastroForm/CadastroForm";

export default function AuthPage() {
    const [showCadastro, setShowCadastro] = useState(false);

    return (
        <>
            {showCadastro ? (
                <CadastroForm onShowLogin={() => setShowCadastro(false)} />
            ) : (
                <LoginForm onShowCadastro={() => setShowCadastro(true)} />
            )}
        </>
    );
}
