import ResumoAgendamentos from '../../components/AgendamentoDashboard/ResumoAgendamentos';
import CortesPendentes from '../../components/AgendamentoDashboard/CortesPendentes';
import ControlePlanos from '../../components/AgendamentoDashboard/ControlePlanos';
import AgendaDia from '../../components/AgendamentoDashboard/AgendaDia';
import GridAgendamentos from '../../components/AgendamentoDashboard/GridAgendamentos';
import AgendarCliente from '../../components/AgendamentoDashboard/AgendarCliente';

export default function AgendamentoPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard do Barbeiro</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ResumoAgendamentos />
                <ControlePlanos />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <CortesPendentes />
                <AgendaDia />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <GridAgendamentos />
                <AgendarCliente />
            </div>
        </div>
    );
}