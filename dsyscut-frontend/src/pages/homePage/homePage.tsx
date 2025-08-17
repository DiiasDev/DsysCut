import { useState, useEffect } from "react";
import style from "./style.module.css";
import Sidebar from "../../components/Sidebar/sidebar";

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
            {(!isMobile || sidebarOpen) && (
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            )}
            <div
                className={style.mainContent}
                style={{
                    marginLeft: !isMobile ? sidebarWidth : 0,
                    transition: "margin-left 0.3s",
                    width: '100%',
                }}
            >
                <header className={style.header}>
                    <div className={style.logo}>DsysCut</div>
                    <div className={style.profile}>
                        <img
                            src="https://i.pravatar.cc/40?img=3"
                            alt="Perfil"
                            className={style.avatar}
                        />
                        <span className={style.username}>Gabriel</span>
                    </div>
                </header>
                <div className={style.homeContainer}>
                    {/* Hero Section */}
                    <section className={style.heroSection}>
                        <div className={style.heroText}>
                            <span className={style.heroTag}>Barbearia</span>
                            <h1>Seu negócio, sua agenda, seu sucesso.</h1>
                            <p>
                                Controle total dos seus horários, clientes e serviços em um painel moderno e fácil de usar.
                            </p>
                            <button className={style.scheduleButton}>
                                + Agendar novo horário
                            </button>
                        </div>
                        <div className={style.heroImage}>
                            {/* Imagem ilustrativa, pode ser trocada por uma imagem real */}
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Barbearia" />
                        </div>
                    </section>
                    {/* Estatísticas rápidas */}
                    <section className={style.statsSection}>
                        {stats.map((stat, idx) => (
                            <div key={idx} className={style.statCard}>
                                <span className={style.statValue}>{stat.value}</span>
                                <span className={style.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </section>
                    {/* Cards de agendamentos */}
                    <section className={style.dashboardSection}>
                        <div className={style.appointmentsPanel}>
                            <h2>Próximos agendamentos</h2>
                            <div className={style.appointmentsList}>
                                {upcomingAppointments.map((appt) => (
                                    <div key={appt.id} className={style.appointmentCard}>
                                        <div>
                                            <strong>{appt.cliente}</strong>
                                            <span className={style.service}>{appt.servico}</span>
                                        </div>
                                        <span className={style.time}>{appt.horario}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.highlightPanel}>
                            <h2>Promoção do mês</h2>
                            <p>
                                Corte + Barba por <strong>R$39,90</strong> toda terça-feira!
                            </p>
                            <span className={style.highlightInfo}>
                                Aproveite e aumente o movimento do seu salão.
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}