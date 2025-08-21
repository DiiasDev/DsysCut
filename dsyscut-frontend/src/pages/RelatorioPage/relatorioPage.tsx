import CardKPI from '../../components/Relatorio/CardKPI'
import FiltroPeriodo from '../../components/Relatorio/FiltroPeriodo'
import FaturamentoMensal from '../../components/Relatorio/FaturamentoMensal'
import ClientesAtendidos from '../../components/Relatorio/ClientesAtendidos'
import ServicosMaisRealizados from '../../components/Relatorio/ServicosMaisRealizados'
import AvaliacoesClientes from '../../components/Relatorio/AvaliacoesClientes'
import HorariosPico from '../../components/Relatorio/HorariosPico'
import ProdutosMaisVendidos from '../../components/Relatorio/ProdutosMaisVendidos'
import style from './style.module.css'

export default function RelatorioPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Relatório da Barbearia</h1>
            <div className="mb-6">
                <FiltroPeriodo />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <CardKPI titulo="Faturamento do Mês" valor="R$ 8.500" icone="💰" />
                <CardKPI titulo="Clientes Hoje" valor="27" icone="🧑‍🦱" />
                <CardKPI titulo="Ticket Médio" valor="R$ 65,00" icone="📈" />
                <CardKPI titulo="Serviços Realizados" valor="112" icone="✂️" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FaturamentoMensal />
                <ClientesAtendidos />
                <ServicosMaisRealizados />
                <AvaliacoesClientes />
                <HorariosPico />
                <ProdutosMaisVendidos />
            </div>
        </div>
    )
}