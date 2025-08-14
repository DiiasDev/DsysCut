import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar/sidebar"
import style from "./style.module.css"
import CabecalhoHome from "../../components/CabecalhoHome/cabecalhoHome";
import UltimosServicos from "../../components/UltimosServicos/ultimosServicos";
import CarrosselSistema from "../../components/carrosselSistema/carrosselSistema";
import AtalhosHome from "../../components/AtalhosHome/atalhosHome";

export default function HomePage() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            // Auto-collapse sidebar on mobile
            if (mobile) {
                setIsSidebarCollapsed(true);
            }
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className={style.container}>
            <div className={`${style.sidebar} ${isSidebarCollapsed ? style.sidebarCollapsed : ''}`}>
                <Sidebar
                    isCollapsed={isSidebarCollapsed}
                    onToggle={handleSidebarToggle}
                />
            </div>

            <div
                className={`${style.content} ${isSidebarCollapsed ? style.contentExpanded : ''}`}
                style={{
                    marginLeft: isSidebarCollapsed ? 0 : 72,
                    transition: "margin-left 0.3s"
                }}
            >
                <div className={style.cabecalho}>
                    {/* Mobile menu button */}
                    {isMobile && (
                        <button
                            className={style.mobileMenuButton}
                            onClick={handleSidebarToggle}
                            aria-label="Abrir menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    )}
                    <CabecalhoHome sidebarWidth={isSidebarCollapsed ? 0 : 72} />
                    <UltimosServicos />
                    <CarrosselSistema />
                    <AtalhosHome />
                </div>
            </div>
        </div>
    )
}