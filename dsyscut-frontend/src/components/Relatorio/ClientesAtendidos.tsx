export default function ClientesAtendidos() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-64">
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Clientes Atendidos</h2>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-4">
                    Gráfico sugerido: Barra
                </span>
                <p className="text-gray-600 text-sm">
                    Veja quantos clientes foram atendidos em cada período. Ajuda a identificar horários de pico.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 mt-4">
                <span className="text-2xl font-bold text-green-700">27</span>
                <span className="text-sm text-green-500 mt-1">Hoje</span>
            </div>
        </div>
    )
}
