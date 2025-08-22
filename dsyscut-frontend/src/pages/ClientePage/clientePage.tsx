import { useState } from 'react'
import ClienteStats from '../../components/Clientes/ClienteStats'
import ClienteList from '../../components/Clientes/ClienteList'
import AddClienteButton from '../../components/Clientes/AddClienteButton'

interface ClienteMensal {
    id: number
    nome: string
    cortesRestantes: number
    totalCortes: number
    fotoUrl?: string
    mensalAtivo: boolean
    whatsapp?: string
    instagram?: string
}
interface ClienteAvulso {
    id: number
    nome: string
    fotoUrl?: string
    mensalAtivo?: boolean
    whatsapp?: string
    instagram?: string
}

export default function ClientePage() {
    // Mock de dados para exemplo
    const [clientesMensais, setClientesMensais] = useState<ClienteMensal[]>([
        { id: 1, nome: 'João Silva', cortesRestantes: 2, totalCortes: 4, mensalAtivo: true, whatsapp: '5511988888888', instagram: 'joaosilva' },
        { id: 2, nome: 'Maria Souza', cortesRestantes: 1, totalCortes: 4, mensalAtivo: true, whatsapp: '5511999999999', instagram: 'mariasouza' },
    ])
    const [clientesAvulsos, setClientesAvulsos] = useState<ClienteAvulso[]>([
        { id: 3, nome: 'Carlos Lima', mensalAtivo: false, whatsapp: '5511977777777', instagram: 'carloslima' },
        { id: 4, nome: 'Ana Paula', mensalAtivo: false, whatsapp: '5511966666666', instagram: 'anapaula' },
    ])

    // Alterna cliente entre mensal/avulso
    function handleToggleMensal(clienteId: number, tipo: 'mensal' | 'avulso') {
        if (tipo === 'mensal') {
            const cliente = clientesMensais.find(c => c.id === clienteId)
            if (cliente) {
                setClientesMensais(mensais => mensais.filter(c => c.id !== clienteId))
                setClientesAvulsos(avulsos => [
                    ...avulsos,
                    {
                        id: cliente.id,
                        nome: cliente.nome,
                        fotoUrl: cliente.fotoUrl,
                        mensalAtivo: false,
                        whatsapp: cliente.whatsapp,
                        instagram: cliente.instagram,
                    }
                ])
            }
        } else {
            const cliente = clientesAvulsos.find(c => c.id === clienteId)
            if (cliente) {
                setClientesAvulsos(avulsos => avulsos.filter(c => c.id !== clienteId))
                setClientesMensais(mensais => [
                    ...mensais,
                    {
                        id: cliente.id,
                        nome: cliente.nome,
                        cortesRestantes: 0,
                        totalCortes: 4,
                        fotoUrl: cliente.fotoUrl,
                        mensalAtivo: true,
                        whatsapp: cliente.whatsapp,
                        instagram: cliente.instagram,
                    }
                ])
            }
        }
    }

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
            <ClienteStats
                totalClientes={clientesMensais.length + clientesAvulsos.length}
                clientesMensais={clientesMensais.length}
                clientesAvulsos={clientesAvulsos.length}
            />
            <div className="flex justify-between items-center mt-8 mb-4">
                <h2
                    className="text-xl font-semibold"
                    style={{ color: "var(--color-text)" }}
                >
                    Clientes Mensais
                </h2>
                <AddClienteButton />
            </div>
            <ClienteList tipo="mensal" clientes={clientesMensais} onToggleMensal={handleToggleMensal} />
            <h2
                className="text-xl font-semibold mt-8 mb-4"
                style={{ color: "var(--color-text)" }}
            >
                Clientes Avulsos
            </h2>
            <ClienteList tipo="avulso" clientes={clientesAvulsos} onToggleMensal={handleToggleMensal} />
        </div>
    )
}