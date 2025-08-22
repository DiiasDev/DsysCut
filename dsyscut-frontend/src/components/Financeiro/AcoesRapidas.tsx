













import React, { useState } from 'react';
import FormRegistrarReceitaDespesa from './FormRegistrarReceitaDespesa';

export default function AcoesRapidas() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-4 mb-6">
        <button
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded shadow hover:bg-green-700 transition"
          onClick={() => setOpen(true)}
        >
          Registrar
        </button>
      </div>
      {open && (
        <FormRegistrarReceitaDespesa onClose={() => setOpen(false)} />
      )}
    </>
  );
}
