export default function FaturamentoMensal() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-64">
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Faturamento Mensal</h2>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-4">
                    Gráfico sugerido: Linha
                </span>
                <p className="text-gray-600 text-sm">
                    Acompanhe o crescimento do faturamento mês a mês. Ideal para visualizar tendências e sazonalidades.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 mt-4">
                <span className="text-2xl font-bold text-blue-700">R$ 8.500</span>
                <span className="text-sm text-blue-500 mt-1">+12% em relação ao mês anterior</span>
            </div>
        </div>
    )
}
