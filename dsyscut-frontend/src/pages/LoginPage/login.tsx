import { useState } from "react";
import style from './style.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import CadastroForm from '../../components/CadastroForm/CadastroForm'

const illustrations = [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
];
const randomImg = illustrations[Math.floor(Math.random() * illustrations.length)];

const isMobile = typeof window !== "undefined" && window.innerWidth <= 700;

interface LoginPageProps {
    onLogin?: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
    const [showCadastro, setShowCadastro] = useState(false);

    return (
        <div className={style.loginBg}>
            {showCadastro ? (
                <CadastroForm onShowLogin={() => setShowCadastro(false)} onLogin={onLogin} />
            ) : (
                <LoginForm onShowCadastro={() => setShowCadastro(true)} onLogin={onLogin} />
            )}
        </div>
    );
}