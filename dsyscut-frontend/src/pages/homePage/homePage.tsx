import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import UltimosServicos from "../../components/UltimosServicos/ultimosServicos";
import CarrosselSistema from "../../components/carrosselSistema/carrosselSistema";
import AtalhosHome from "../../components/AtalhosHome/atalhosHome";
import DashboardStats from "../../components/DashboardStats/dashboardStats";

export default function HomePage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    // Atualiza responsividade ao redimensionar
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
       <>
       <div className={style.container} style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div
                className={style.content}
                style={{
                    flex: 1,
                    paddingLeft: isMobile ? 0 : 240,
                    transition: 'padding-left 0.3s'
                }}
            >
                <span>teste</span>
            </div>
       </div>
       </>
    )
}