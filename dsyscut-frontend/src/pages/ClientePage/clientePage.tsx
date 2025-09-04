import ClienteStats from '../../components/Clientes/ClienteStats'
import AddClienteButton from '../../components/Clientes/AddClienteButton'
import ClientCardsNew from '../../components/Clientes/ClientCardsNew'

export default function ClientePage() {
    return (
        <div
            className="min-h-screen p-6"
            style={{
                background: "var(--color-bg)",
                color: "var(--color-text)"
            }}
        >
            <h1
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--color-primary)" }}
            >
                Clientes
            </h1>
            <ClienteStats />
            <div className="flex justify-between items-center mt-8 mb-4">
                <AddClienteButton />
            </div>
            <ClientCardsNew/>
        </div>
    )
}