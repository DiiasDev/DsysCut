import React from 'react'

export default function FiltroPeriodo() {
    return (
        <form className="flex flex-wrap items-end gap-4 bg-white p-4 rounded-xl shadow mb-4">
            <div>
                <label className="block text-sm text-gray-600 mb-1">Data Inicial</label>
                <input type="date" className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring w-full" />
            </div>
            <div>
                <label className="block text-sm text-gray-600 mb-1">Data Final</label>
                <input type="date" className="border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring w-full" />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
                Aplicar
            </button>
        </form>
    )
}
