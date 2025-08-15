import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import UltimosServicos from "../../components/UltimosServicos/ultimosServicos";
import CarrosselSistema from "../../components/carrosselSistema/carrosselSistema";
import AtalhosHome from "../../components/AtalhosHome/atalhosHome";
import DashboardStats from "../../components/DashboardStats/dashboardStats";

export default function HomePage() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

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

    const handleNavigation = (page: string) => {
        setCurrentPage(page);
    };

    const sidebarWidth = isSidebarCollapsed ? 72 : 240;

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <div className={style.dashboardContainer}>
                        <div className={style.dashboardGrid}>
                            {/* Hero Section */}
                            <div className={style.heroSection}>
                                <CarrosselSistema />
                            </div>

                            {/* Stats Section */}
                            <div className={style.statsSection}>
                                <DashboardStats />
                            </div>

                            {/* Main Content */}
                            <div className={style.mainContent}>
                                <div className={style.servicesSection}>
                                    <UltimosServicos />
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className={style.quickActions}>
                                <AtalhosHome />
                            </div>
                        </div>
                    </div>
                );
            case 'financeiro':
                return <div>Financeiro Page Content</div>;
                // return <FinanceiroPage />;
            case 'agendamentos':
                return <div>Agendamentos Page Content</div>;
                // return <AgendamentosPage />;
            case 'clientes':
                return <div>Clientes Page Content</div>;
                // return <ClientesPage />;
            case 'relatorios':
                return <div>Relatórios Page Content</div>;
                // return <RelatoriosPage />;
            case 'pacotes':
                return <div>Pacotes Page Content</div>;
                // return <PacotesPage />;
            case 'info':
                return <div>Info Page Content</div>;
                // return <InfoPage />;
            default:
                return (
                    <div className={style.dashboardContainer}>
                        <div className={style.dashboardGrid}>
                            <div className={style.heroSection}>
                                <CarrosselSistema />
                            </div>
                            <div className={style.statsSection}>
                                <DashboardStats />
                            </div>
                            <div className={style.mainContent}>
                                <div className={style.servicesSection}>
                                    <UltimosServicos />
                                </div>
                            </div>
                            <div className={style.quickActions}>
                                <AtalhosHome />
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className={style.container}>
            <div className={`${style.sidebar} ${isSidebarCollapsed ? style.sidebarCollapsed : ''}`}>
                <Sidebar
                    isCollapsed={isSidebarCollapsed}
                    onToggle={handleSidebarToggle}
                    onNavigate={handleNavigation}
                />
            </div>

            <Header 
                userName="Usuario" 
                isSidebarCollapsed={isSidebarCollapsed}
                sidebarWidth={sidebarWidth}
                isMobile={isMobile}
            />

            <div
                className={`${style.content} ${isSidebarCollapsed ? style.contentExpanded : ''}`}
                style={{
                    marginLeft: isMobile ? 0 : sidebarWidth,
                    marginTop: '70px', // Account for fixed header height
                    transition: "margin-left 0.3s ease"
                }}
            >
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
                {renderCurrentPage()}
            </div>
        </div>
    )
}