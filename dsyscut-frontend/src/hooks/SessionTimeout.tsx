import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const INACTIVITY_LIMIT = 5 * 60 * 1000; 

export default function SessionTimeout(){
    const navigate = useNavigate()
    const timeRef = useRef<NodeJS.Timeout | null>(null); 

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isLogged");
        window.location.reload();
        navigate('/login')
    }

    const resetTimer = () => {
        if(timeRef.current) clearTimeout(timeRef.current); 
        timeRef.current = setTimeout(logout, INACTIVITY_LIMIT);
    }

    useEffect(() => {
        const events = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll']; 

        events.forEach(event => window.addEventListener(event, resetTimer))

        resetTimer()

        return () => {
            events.forEach(event => window.removeEventListener(event, resetTimer))
            if(timeRef.current) clearTimeout(timeRef.current)
        }
    }, [])
    return null
}