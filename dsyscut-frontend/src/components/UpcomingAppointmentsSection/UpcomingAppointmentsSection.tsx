import React from "react";
import "./UpcomingAppointmentsSection.css";

const upcomingAppointments = [
  { cliente: "Carlos Silva", horario: "11:30", servico: "Corte Masculino" },
  { cliente: "Ana Souza", horario: "12:00", servico: "Barba" },
  { cliente: "Pedro Lima", horario: "13:15", servico: "Corte + Barba" },
];

const UpcomingAppointmentsSection: React.FC = () => (
  <section className="w-screen mb-8 px-4 md:px-8">
    <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3 flex items-center gap-2">
      <i className="fas fa-clock text-[var(--color-primary)]" /> Próximos agendamentos
    </h2>
    <div className="bg-[var(--color-bg-card)] rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[var(--color-text-secondary)] border-b border-[var(--color-border)]">
            <th className="py-2">Cliente</th>
            <th className="py-2">Horário</th>
            <th className="py-2">Serviço</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppointments.map((a, idx) => (
            <tr key={idx} className="hover:bg-[var(--color-bg)] transition">
              <td className="py-2">{a.cliente}</td>
              <td className="py-2">{a.horario}</td>
              <td className="py-2">{a.servico}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {upcomingAppointments.length === 0 && (
        <div className="text-center text-[var(--color-text-secondary)] py-4">Nenhum agendamento próximo.</div>
      )}
    </div>
  </section>
);

export default UpcomingAppointmentsSection;
