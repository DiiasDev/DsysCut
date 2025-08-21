import ClienteCard from './ClienteCard'

type ClienteMensal = {
    id: number
    nome: string
    cortesRestantes: number
    totalCortes: number
    fotoUrl?: string
    mensalAtivo: boolean
    whatsapp?: string
    instagram?: string
}
type ClienteAvulso = {
    id: number
    nome: string
    fotoUrl?: string
    mensalAtivo?: boolean
    whatsapp?: string
    instagram?: string
}

// União discriminada para garantir tipos corretos
type ClienteListProps =
    | { tipo: 'mensal'; clientes: ClienteMensal[]; onToggleMensal: (id: number, tipo: 'mensal' | 'avulso') => void }
    | { tipo: 'avulso'; clientes: ClienteAvulso[]; onToggleMensal: (id: number, tipo: 'mensal' | 'avulso') => void }

export default function ClienteList(props: ClienteListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.clientes.map((cliente: any) => (
                <ClienteCard
                    key={cliente.id}
                    tipo={props.tipo}
                    cliente={cliente}
                    onToggleMensal={() => props.onToggleMensal(cliente.id, props.tipo)}
                />
            ))}
        </div>
    )
}
