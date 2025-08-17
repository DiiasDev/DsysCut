import style from "../../pages/homePage/style.module.css";

type Appointment = {
    id: number;
    cliente: string;
    horario: string;
    servico: string;
};

export default function DashboardSection({ upcomingAppointments }: { upcomingAppointments: Appointment[] }) {
    return (
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
    );
}
