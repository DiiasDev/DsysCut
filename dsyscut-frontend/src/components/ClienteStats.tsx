type ClienteStatsProps = {
    totalClientes: number
    clientesMensais: number
    clientesAvulsos: number
}

export default function ClienteStats({ totalClientes, clientesMensais, clientesAvulsos }: ClienteStatsProps) {
    return (
        <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded shadow p-4 text-center">
                <div className="text-lg font-bold">{totalClientes}</div>
                <div className="text-gray-500">Total de clientes</div>
            </div>
            <div className="bg-white rounded shadow p-4 text-center">
                <div className="text-lg font-bold">{clientesMensais}</div>
                <div className="text-gray-500">Mensais</div>
            </div>
            <div className="bg-white rounded shadow p-4 text-center">
                <div className="text-lg font-bold">{clientesAvulsos}</div>
                <div className="text-gray-500">Avulsos</div>
            </div>
        </div>
    )
}
