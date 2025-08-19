import style from './style.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'

const illustrations = [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
];
const randomImg = illustrations[Math.floor(Math.random() * illustrations.length)];

const isMobile = typeof window !== "undefined" && window.innerWidth <= 700;

export default function LoginPage() {
    return (
        <div className={style.loginBg}>
            
                        <LoginForm />
        </div>
    );
}