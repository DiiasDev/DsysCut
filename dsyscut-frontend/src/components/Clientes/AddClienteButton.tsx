export default function AddClienteButton() {
    return (
        <button
            className="px-4 py-2 rounded shadow hover:transition"
            style={{
                background: "var(--color-accent)",
                color: "var(--color-bg-card)"
            }}
        >
            + Adicionar Cliente
        </button>
    )
}
