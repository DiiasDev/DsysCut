export default function ServicosMaisRealizados() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-64">
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Serviços Mais Realizados</h2>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mb-4">
                    Gráfico sugerido: Pizza
                </span>
                <p className="text-gray-600 text-sm">
                    Descubra quais serviços são mais populares na barbearia. Útil para promoções e estoque.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 mt-4">
                <span className="text-lg font-bold text-yellow-700">Corte Masculino</span>
                <span className="text-sm text-yellow-500 mt-1">53% dos serviços</span>
            </div>
        </div>
    )
}
