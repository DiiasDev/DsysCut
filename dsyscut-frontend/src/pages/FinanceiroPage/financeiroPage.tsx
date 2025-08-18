import { Typography, Box, Button } from "@mui/material";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../../components/BarChart/BarChart";
import "./financeiroPage.css";

export default function FinanceiroPage() {
  // Exemplo de dados de resumo
  const resumo = [
    { label: "Receitas Totais", value: "R$ 6.500", color: "#43a047" },
    { label: "Despesas Totais", value: "R$ 4.200", color: "#e53935" },
    { label: "Investimentos", value: "R$ 1.800", color: "#1e88e5" },
    { label: "Saldo Atual", value: "R$ 2.300", color: "#222" },
  ];

  const movimentacoes = [
    {
      data: "10/06/2024",
      tipo: "Receita",
      descricao: "Venda produto",
      valor: "R$ 1.200",
    },
    {
      data: "09/06/2024",
      tipo: "Despesa",
      descricao: "Pagamento fornecedor",
      valor: "R$ 800",
    },
    {
      data: "08/06/2024",
      tipo: "Investimento",
      descricao: "Aporte fundo",
      valor: "R$ 500",
    },
    {
      data: "07/06/2024",
      tipo: "Despesa",
      descricao: "Conta de luz",
      valor: "R$ 200",
    },
  ];

  const metas = [
    { titulo: "Meta de Receita", progresso: 65, objetivo: "R$ 10.000" },
    { titulo: "Meta de Economia", progresso: 40, objetivo: "R$ 5.000" },
    { titulo: "Meta de Investimento", progresso: 36, objetivo: "R$ 5.000" },
  ];

  return (
    <Box className="financeiro-dashboard">
      <Box className="dashboard-summary-header">
        <Typography variant="h6" className="section-title">
          Resumo Financeiro
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className="add-btn styled-btn"
        >
          + Receita/Despesa
        </Button>
      </Box>
      <Box className="dashboard-summary">
        {resumo.map((item) => (
          <Box
            className="summary-card"
            key={item.label}
            style={{ borderLeft: `6px solid ${item.color}` }}
          >
            <span className="summary-label">{item.label}</span>
            <span
              className="summary-value"
              style={{ color: item.color }}
            >
              {item.value}
            </span>
          </Box>
        ))}
      </Box>
      <Box className="dashboard-charts-header">
        <Typography variant="h6" className="section-title">
          Gráficos
        </Typography>
      </Box>
      <Box className="dashboard-charts">
        <Box className="dashboard-card">
          <PieChart />
        </Box>
        <Box className="dashboard-card">
          <BarChart />
        </Box>
      </Box>

      <Box className="dashboard-section">
        <Box className="dashboard-section-header">
          <Typography variant="h6" className="section-title">
            Movimentações Recentes
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="medium"
            className="add-btn styled-btn"
          >
            + Movimentação
          </Button>
        </Box>
        <Box className="movimentacoes-table-wrapper">
          <table className="movimentacoes-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {movimentacoes.map((m, idx) => {
                let valorClass = "";
                if (m.tipo === "Receita") valorClass = "valor-positivo";
                else if (m.tipo === "Despesa") valorClass = "valor-negativo";
                else if (m.tipo === "Investimento") valorClass = "valor-investimento";
                return (
                  <tr key={idx}>
                    <td>{m.data}</td>
                    <td>{m.tipo}</td>
                    <td>{m.descricao}</td>
                    <td className={valorClass}>{m.valor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
      </Box>

      <Box className="dashboard-section">
        <Box className="dashboard-section-header">
          <Typography variant="h6" className="section-title">
            Metas Financeiras
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            className="add-btn styled-btn"
          >
            + Meta
          </Button>
        </Box>
        <Box className="metas-wrapper">
          {metas.map((meta, idx) => (
            <Box className="meta-card" key={idx}>
              <span className="meta-title">{meta.titulo}</span>
              <span className="meta-objetivo">{meta.objetivo}</span>
              <Box className="meta-bar">
                <Box
                  className="meta-bar-progress"
                  style={{ width: `${meta.progresso}%` }}
                />
              </Box>
              <span className="meta-progresso">{meta.progresso}%</span>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}