import React, { useState } from 'react'
// @ts-ignore
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function FiltroPeriodo() {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)
    const isDark = document.body.getAttribute('data-theme') === 'dark'

    return (
        <form className="flex flex-wrap items-end gap-4 p-4 rounded-xl shadow mb-4" style={{ background: "var(--color-bg-card)" }}>
            <style>
                {`
                .react-datepicker__input-container input {
                    background: var(--color-bg-card);
                    color: var(--color-text);
                    border: 1px solid var(--color-border);
                    border-radius: 0.375rem;
                    padding: 0.5rem 0.75rem;
                    width: 100%;
                }
                .react-datepicker {
                    background: var(--color-bg-card);
                    color: var(--color-text);
                    border: 1px solid var(--color-border);
                }
                .react-datepicker__header {
                    background: var(--color-bg-card);
                    border-bottom: 1px solid var(--color-border);
                }
                .react-datepicker__day-name,
                .react-datepicker__day,
                .react-datepicker__time-name {
                    color: var(--color-text);
                }
                ${isDark ? `
                .react-datepicker {
                    box-shadow: 0 2px 8px rgba(0,0,0,0.7);
                }
                ` : ''}
                `}
            </style>
            <div>
                <label className="block text-sm mb-1" style={{ color: "var(--color-text-secondary)" }}>Data Inicial</label>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="dd/mm/aaaa"
                    className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
                />
            </div>
            <div>
                <label className="block text-sm mb-1" style={{ color: "var(--color-text-secondary)" }}>Data Final</label>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="dd/mm/aaaa"
                    className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
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
