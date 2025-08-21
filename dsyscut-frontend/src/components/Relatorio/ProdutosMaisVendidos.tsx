export default function ProdutosMaisVendidos() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-64">
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Produtos Mais Vendidos</h2>
                <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded mb-4">
                    Gráfico sugerido: Pizza
                </span>
                <p className="text-gray-600 text-sm">
                    Saiba quais produtos têm maior saída e otimize seu estoque.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 mt-4">
                <span className="text-lg font-bold text-pink-700">Pomada Modeladora</span>
                <span className="text-sm text-pink-500 mt-1">38 vendas este mês</span>
            </div>
        </div>
    )
}
