import React from 'react'

export default function FiltroPeriodo() {
    return (
        <form className="flex flex-wrap items-end gap-4 p-4 rounded-xl shadow mb-4" style={{ background: "var(--color-bg-card)" }}>
            <div>
                <label className="block text-sm mb-1" style={{ color: "var(--color-text-secondary)" }}>Data Inicial</label>
                <input
                    type="date"
                    className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
                    style={{
                        color: "var(--color-text)",
                        background: "var(--color-bg-card)",
                        borderColor: "var(--color-border)"
                    }}
                />
            </div>
            <div>
                <label className="block text-sm mb-1" style={{ color: "var(--color-text-secondary)" }}>Data Final</label>
                <input
                    type="date"
                    className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
                    style={{
                        color: "var(--color-text)",
                        background: "var(--color-bg-card)",
                        borderColor: "var(--color-border)"
                    }}
                />
            </div>
            <button
                type="submit"
                className="px-6 py-2 rounded font-semibold hover:transition"
                style={{
                    background: "var(--color-primary)",
                    color: "var(--color-bg-card)"
                }}
            >
                Aplicar
            </button>
        </form>
    )
}
