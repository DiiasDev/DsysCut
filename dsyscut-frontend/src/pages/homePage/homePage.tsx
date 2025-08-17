import { useState, useEffect } from "react";
import style from "./style.module.css";
import Sidebar from "../../components/Sidebar/sidebar";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HeroSection from "../../components/HeroSection/HeroSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import DashboardSection from "../../components/DashboardSection/DashboardSection";
import FinanceiroPage from "../FinanceiroPage/financeiroPage";

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
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [selectedTab, setSelectedTab] = useState("Home");
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

    // Função para renderizar o componente conforme a tab
    function renderTabComponent() {
        switch (selectedTab) {
            case "Home":
                return (
                    <div className={style.homeContainer}>
                        <HeroSection />
                        <StatsSection stats={stats} />
                        <DashboardSection upcomingAppointments={upcomingAppointments} />
                    </div>
                );
            case "Financeiro":
                return <FinanceiroPage />;
            // Adicione outros cases conforme necessário
            default:
                return <div>{selectedTab}</div>;
        }
    }

    return (
        <div className={style.wrapper}>
            {/* Sidebar sempre presente, controlado por props */}
            <Sidebar
                open={sidebarOpen}
                setOpen={setSidebarOpen}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            <div
                className={style.mainContent}
                style={{
                    marginLeft: !isMobile ? sidebarWidth : 0,
                    transition: "margin-left 0.3s",
                    width: '100%',
                }}
            >
                <HomeHeader />
                {renderTabComponent()}
            </div>
        </div>
    );
}