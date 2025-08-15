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

    // Bloqueia scroll do body quando sidebar está aberto no mobile
    useEffect(() => {
        if (isMobile && !isSidebarCollapsed) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            // Bloqueia scroll por touch
            const preventScroll = (e: TouchEvent) => e.preventDefault();
            document.addEventListener('touchmove', preventScroll, { passive: false });
            return () => {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.removeEventListener('touchmove', preventScroll);
            };
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [isMobile, isSidebarCollapsed]);

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
                    <div 
                        style={{
                            padding: isMobile ? '1rem 0' : '1rem 0',
                            maxWidth: '100%',
                            margin: '0 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: isMobile ? '1.5rem' : '2rem'
                        }}
                    >
                        {/* Carrossel */}
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <CarrosselSistema />
                        </div>

                        {/* Stats */}
                        <div style={{ width: '100%' }}>
                            <DashboardStats />
                        </div>

                        {/* Serviços */}
                        <div style={{ width: '100%' }}>
                            <UltimosServicos />
                        </div>

                        {/* Atalhos */}
                        <div style={{ width: '100%' }}>
                            <AtalhosHome />
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
                onSidebarToggle={handleSidebarToggle}
            />

            <div
                className={`${style.content} ${isSidebarCollapsed ? style.contentExpanded : ''}`}
                style={{
                    marginLeft: isMobile ? 0 : sidebarWidth,
                    marginTop: isMobile ? '75px' : '70px',
                    padding: 0,
                    transition: "margin-left 0.3s ease",
                    width: isMobile ? '100%' : `calc(100% - ${sidebarWidth}px)`
                }}
            >
                {renderCurrentPage()}
            </div>
        </div>
    )
}