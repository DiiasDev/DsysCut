import { useState, useEffect } from "react";
import style from "./style.module.css";
import Sidebar from "../../components/Sidebar/sidebar";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HeroSection from "../../components/HeroSection/HeroSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import DashboardSection from "../../components/DashboardSection/DashboardSection";

// Mock de agendamentos futuros
const upcomingAppointments = [
    { id: 1, cliente: "João Silva", horario: "10:00", servico: "Corte de cabelo" },
    { id: 2, cliente: "Maria Souza", horario: "11:30", servico: "Barba" },
    { id: 3, cliente: "Carlos Lima", horario: "13:00", servico: "Corte + Barba" },
];

// Mock de estatísticas
const stats = [
    { label: "Clientes cadastrados", value: 128 },
    { label: "Serviços realizados este mês", value: 54 },
    { label: "Agendamentos hoje", value: 7 },
];

export default function HomePage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 900 : false
    );

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 900);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sidebarWidth = sidebarOpen ? 280 : 64;

    return (
        <div className={style.wrapper}>
            {/* Sidebar desktop */}
            {!isMobile && (
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            )}
            {/* Sidebar mobile overlay */}
            {isMobile && sidebarOpen && (
                <div className={style.sidebarMobileOverlay} onClick={() => setSidebarOpen(false)}>
                    <div className={style.sidebarMobile} onClick={e => e.stopPropagation()}>
                        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
                    </div>
                </div>
            )}
            <div
                className={style.mainContent}
                style={{
                    marginLeft: !isMobile ? sidebarWidth : 0,
                    transition: "margin-left 0.3s",
                    width: '100%',
                }}
            >
                <HomeHeader />
                <div className={style.homeContainer}>
                    <HeroSection />
                    <StatsSection stats={stats} />
                    <DashboardSection upcomingAppointments={upcomingAppointments} />
                </div>
            </div>
        </div>
    );
}