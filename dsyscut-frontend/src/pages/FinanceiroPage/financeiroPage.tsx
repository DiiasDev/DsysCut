import TabelaTransacoes from '../../components/Financeiro/TabelaTransacoes';
import SecaoGraficos from '../../components/Financeiro/SecaoGraficos';
import AcoesRapidas from '../../components/Financeiro/AcoesRapidas';
import ResumoMensal from '../../components/Financeiro/ResumoMensal';
import CategoriasDespesas from '../../components/Financeiro/CategoriasDespesas';
import ProximosRecebimentos from '../../components/Financeiro/ProximosRecebimentos';
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

  const transacoes = [
    { id: 1, tipo: 'Receita', descricao: 'Corte de cabelo', valor: 50, data: '2024-06-01' },
    { id: 2, tipo: 'Despesa', descricao: 'Compra de produtos', valor: -200, data: '2024-06-02' },
    // ...mais transações
  ];

  const categorias = [
    { nome: 'Produtos', valor: 500 },
    { nome: 'Aluguel', valor: 400 },
    { nome: 'Energia', valor: 200 },
    // ...mais categorias
  ];

  const recebimentos = [
    { id: 1, cliente: 'João', valor: 50, data: '2024-06-22' },
    { id: 2, cliente: 'Maria', valor: 70, data: '2024-06-23' },
    // ...mais recebimentos
  ];

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
      <ResumoMensal despesaMes={resumoMensal.despesaMes} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-6">
          <TabelaTransacoes transacoes={transacoes} />
          <CategoriasDespesas categorias={categorias} />
          <ProximosRecebimentos recebimentos={recebimentos} />
        </div>
        <SecaoGraficos />
      </div>
    </div>
  );
}