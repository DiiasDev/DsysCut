import { useState } from 'react';
import style from './style.module.css';

const isMobile = window.innerWidth <= 700;

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600">
                Tailwind funcionando! 🚀
            </h1>
        </div>
    );
}