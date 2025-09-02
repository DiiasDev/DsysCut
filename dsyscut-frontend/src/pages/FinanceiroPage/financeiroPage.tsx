import TabelaTransacoes from '../../components/Financeiro/TabelaTransacoes';
import SecaoGraficos from '../../components/Financeiro/SecaoGraficos';
import AcoesRapidas from '../../components/Financeiro/AcoesRapidas';
import ResumoMensal from '../../components/Financeiro/ResumoMensal';
import CategoriasDespesas from '../../components/Financeiro/CategoriasDespesas';
import { useTheme } from '../../ThemeContext';

export default function FinanceiroPage() {
  const { theme } = useTheme();

  // Exemplo de dados mockados para integração futura
  const resumo = {
    receita: 3500,
    despesa: 1200,
    lucro: 2300,
  };

  const resumoMensal = {
    receitaMes: 1200,
    despesaMes: 400,
  };

  const clientesResumo = {
    total: 150,
    ativos: 120,
    inativos: 30,
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] p-6">
      <h1
        className="text-3xl font-bold mb-6"
        style={{
          color: "var(--color-primary)"
        }}
      >
        Financeiro
      </h1>
      <AcoesRapidas />
      <ResumoMensal/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-6">
          <TabelaTransacoes/>
          <CategoriasDespesas/>
        </div>
        <SecaoGraficos />
      </div>
    </div>
  );
}