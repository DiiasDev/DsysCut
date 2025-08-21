export default function AvaliacoesClientes() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-64">
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Avaliações dos Clientes</h2>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mb-4">
                    Gráfico sugerido: Barra
                </span>
                <p className="text-gray-600 text-sm">
                    Visualize a satisfação dos clientes com base nas avaliações recebidas.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 mt-4">
                <span className="text-2xl font-bold text-purple-700">4.8/5</span>
                <span className="text-sm text-purple-500 mt-1">Média das avaliações</span>
            </div>
        </div>
    )
}
