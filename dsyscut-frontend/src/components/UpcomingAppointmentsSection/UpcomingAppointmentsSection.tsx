import React from "react";
import "./UpcomingAppointmentsSection.css";

const upcomingAppointments = [
  { cliente: "Carlos Silva", horario: "11:30", servico: "Corte Masculino", valor: "R$ 40,00" },
  { cliente: "Ana Souza", horario: "12:00", servico: "Barba", valor: "R$ 25,00" },
  { cliente: "Pedro Lima", horario: "13:15", servico: "Corte + Barba", valor: "R$ 60,00" },
];

const UpcomingAppointmentsSection: React.FC = () => (
  <section className="w-full mb-8 px-2 md:px-4">
    <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3 flex items-center gap-2">
      <i className="fas fa-clock text-[var(--color-primary)]" /> Próximos agendamentos
    </h2>
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-[var(--color-bg-card)] rounded-xl shadow-lg">
        <thead>
          <tr className="text-left text-[var(--color-text-secondary)] bg-[var(--color-bg)] rounded-lg">
            <th className="py-3 px-4 rounded-tl-lg">Cliente</th>
            <th className="py-3 px-4">Horário</th>
            <th className="py-3 px-4">Serviço</th>
            <th className="py-3 px-4 rounded-tr-lg">Valor</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppointments.map((a, idx) => (
            <tr
              key={idx}
              className={`transition ${
                idx % 2 === 0
                  ? "bg-[var(--color-bg-table-row)]"
                  : "bg-[var(--color-bg-card)]"
              } hover:bg-[var(--color-bg)]`}
              style={{ borderRadius: 8 }}
            >
              <td className="py-3 px-4 rounded-l-lg">{a.cliente}</td>
              <td className="py-3 px-4">{a.horario}</td>
              <td className="py-3 px-4">{a.servico}</td>
              <td className="py-3 px-4 rounded-r-lg font-semibold text-[var(--color-primary)]">{a.valor}</td>
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
