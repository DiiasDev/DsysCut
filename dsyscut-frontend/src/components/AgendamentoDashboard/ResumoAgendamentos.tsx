import React from 'react';

export default function ResumoAgendamentos() {
    return (
        <div
            className="rounded-lg shadow p-6 flex flex-col gap-4"
            style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)'
            }}
        >
            <h2
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
            >
                Resumo dos Agendamentos
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div
                    className="rounded p-4 flex flex-col items-center"
                    style={{
                        background: 'var(--color-success)',
                        border: '1px solid var(--color-border)'
                    }}
                >
                    <span
                        className="text-2xl font-bold"
                        style={{ color: 'var(--color-bg-card)' }}
                    >
                        12
                    </span>
                    <span style={{ color: 'var(--color-bg-card)' }}>Agendados hoje</span>
                </div>
                <div
                    className="rounded p-4 flex flex-col items-center"
                    style={{
                        background: 'var(--color-accent)',
                        border: '1px solid var(--color-border)'
                    }}
                >
                    <span
                        className="text-2xl font-bold"
                        style={{ color: 'var(--color-bg-card)' }}
                    >
                        5
                    </span>
                    <span style={{ color: 'var(--color-bg-card)' }}>Cortes pendentes</span>
                </div>
                <div
                    className="rounded p-4 flex flex-col items-center"
                    style={{
                        background: 'var(--color-secondary)',
                        border: '1px solid var(--color-border)'
                    }}
                >
                    <span
                        className="text-2xl font-bold"
                        style={{ color: 'var(--color-bg-card)' }}
                    >
                        3
                    </span>
                    <span style={{ color: 'var(--color-bg-card)' }}>Cancelados</span>
                </div>
                <div
                    className="rounded p-4 flex flex-col items-center"
                    style={{
                        background: 'var(--color-primary)',
                        border: '1px solid var(--color-border)'
                    }}
                >
                    <span
                        className="text-2xl font-bold"
                        style={{ color: 'var(--color-bg-card)' }}
                    >
                        8
                    </span>
                    <span style={{ color: 'var(--color-bg-card)' }}>Finalizados</span>
                </div>
            </div>
        </div>
    );
}