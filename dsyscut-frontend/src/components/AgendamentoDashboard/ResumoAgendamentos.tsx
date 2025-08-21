import React from 'react';

export default function ResumoAgendamentos() {
    return (
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Resumo dos Agendamentos</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 rounded p-4 flex flex-col items-center">
                    <span className="text-2xl font-bold text-green-700">12</span>
                    <span className="text-gray-600">Agendados hoje</span>
                </div>
                <div className="bg-blue-100 rounded p-4 flex flex-col items-center">
                    <span className="text-2xl font-bold text-blue-700">5</span>
                    <span className="text-gray-600">Cortes pendentes</span>
                </div>
                <div className="bg-yellow-100 rounded p-4 flex flex-col items-center">
                    <span className="text-2xl font-bold text-yellow-700">3</span>
                    <span className="text-gray-600">Cancelados</span>
                </div>
                <div className="bg-purple-100 rounded p-4 flex flex-col items-center">
                    <span className="text-2xl font-bold text-purple-700">8</span>
                    <span className="text-gray-600">Finalizados</span>
                </div>
            </div>
        </div>
    );
}
