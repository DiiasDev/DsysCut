export default function HorariosPico() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-64">
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Horários de Pico</h2>
                <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded mb-4">
                    Gráfico sugerido: Linha
                </span>
                <p className="text-gray-600 text-sm">
                    Identifique os horários com maior movimento para otimizar o agendamento.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 mt-4">
                <span className="text-lg font-bold text-red-700">16:00 - 18:00</span>
                <span className="text-sm text-red-500 mt-1">Horário mais movimentado</span>
            </div>
        </div>
    )
}
