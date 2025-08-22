import React, { useState } from 'react';
import FormClientes from './formClientes';

export default function AddClienteButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="px-4 py-2 rounded shadow hover:transition"
                style={{
                    background: "var(--color-accent)",
                    color: "var(--color-bg-card)"
                }}
                onClick={() => setOpen(true)}
            >
                + Adicionar Cliente
            </button>
            {open && (
                <FormClientes onClose={() => setOpen(false)} />
            )}
        </>
    )
}
