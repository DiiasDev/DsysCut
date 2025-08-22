export default function ProdutosMaisVendidos() {
    return (
        <div
            className="rounded-lg shadow p-4"
            style={{
                background: "var(--color-bg-card)",
                color: "var(--color-text)"
            }}
        >
            <div className="rounded-xl shadow-md p-6 flex flex-col justify-between h-64" style={{ background: "var(--color-bg-card)" }}>
                <div>
                    <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>Produtos Mais Vendidos</h2>
                    <span
                        className="inline-block text-xs px-2 py-1 rounded mb-4"
                        style={{
                            background: "var(--color-error)",
                            color: "var(--color-bg-card)"
                        }}
                    >
                        Gráfico sugerido: Pizza
                    </span>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Saiba quais produtos têm maior saída e otimize seu estoque.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center h-24 mt-4">
                    <span className="text-lg font-bold" style={{ color: "var(--color-error)" }}>Pomada Modeladora</span>
                    <span className="text-sm mt-1" style={{ color: "var(--color-error)" }}>38 vendas este mês</span>
                </div>
            </div>
        </div>
    )
}
