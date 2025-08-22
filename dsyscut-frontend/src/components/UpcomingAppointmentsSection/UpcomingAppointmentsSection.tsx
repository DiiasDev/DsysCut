import React from "react";
import "./UpcomingAppointmentsSection.css";

const upcomingAppointments = [
  { cliente: "Carlos Silva", horario: "11:30", servico: "Corte Masculino", valor: "R$ 40,00" },
  { cliente: "Ana Souza", horario: "12:00", servico: "Barba", valor: "R$ 25,00" },
  { cliente: "Pedro Lima", horario: "13:15", servico: "Corte + Barba", valor: "R$ 60,00" },
];

const UpcomingAppointmentsSection: React.FC = () => (
  <section className="w-full mb-8 px-2 md:px-4">
    <h2
      className="text-xl font-semibold mb-3 flex items-center gap-2"
      style={{ color: "var(--color-text)" }}
    >
      <i
        className="fas fa-clock"
        style={{ color: "var(--color-primary)" }}
      />{" "}
      Próximos agendamentos
    </h2>
    <div className="overflow-x-auto w-full">
      <table
        className="min-w-full rounded-xl shadow-lg"
        style={{ background: "var(--color-bg-card)" }}
      >
        <thead>
          <tr
            className="text-left rounded-lg"
            style={{
              color: "var(--color-text-secondary)",
              background: "var(--color-bg)"
            }}
          >
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
              className="transition"
              style={{
                borderRadius: 8,
                background: idx % 2 === 0
                  ? "var(--color-hover-row)"
                  : "var(--color-bg-card)"
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--color-bg)")}
              onMouseLeave={e => (e.currentTarget.style.background = idx % 2 === 0 ? "var(--color-hover-row)" : "var(--color-bg-card)")}
            >
              <td className="py-3 px-4 rounded-l-lg" style={{ color: "var(--color-text)" }}>{a.cliente}</td>
              <td className="py-3 px-4" style={{ color: "var(--color-text)" }}>{a.horario}</td>
              <td className="py-3 px-4" style={{ color: "var(--color-text)" }}>{a.servico}</td>
              <td className="py-3 px-4 rounded-r-lg font-semibold" style={{ color: "var(--color-primary)" }}>{a.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {upcomingAppointments.length === 0 && (
        <div
          className="text-center py-4"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Nenhum agendamento próximo.
        </div>
      )}
    </div>
  </section>
);

export default UpcomingAppointmentsSection;
