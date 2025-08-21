import { useState } from 'react'

type ClienteMensal = {
    id: number
    nome: string
    cortesRestantes?: number
    totalCortes?: number
    fotoUrl?: string
    mensalAtivo: boolean
    whatsapp?: string
    instagram?: string
}
type ClienteAvulso = {
    id: number
    nome: string
    fotoUrl?: string
    mensalAtivo: boolean
    whatsapp?: string
    instagram?: string
}
type ClienteCardProps = {
    tipo: 'mensal' | 'avulso'
    cliente: ClienteMensal | ClienteAvulso
    onToggleMensal: () => void
}

function getInitials(nome: string) {
    const parts = nome.split(' ')
    return parts.length > 1
        ? parts[0][0] + parts[1][0]
        : parts[0][0]
}

export default function ClienteCard({ tipo, cliente, onToggleMensal }: ClienteCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col gap-3 border border-gray-100">
            <div className="flex items-center gap-4">
                {cliente.fotoUrl ? (
                    <img src={cliente.fotoUrl} alt={cliente.nome} className="w-14 h-14 rounded-full object-cover border-2 border-blue-200" />
                ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-200 to-blue-400 flex items-center justify-center text-xl font-bold text-white shadow">
                        {getInitials(cliente.nome)}
                    </div>
                )}
                <div>
                    <div className="font-bold text-lg text-gray-800">{cliente.nome}</div>
                    {cliente.whatsapp && (
                        <div className="text-xs text-gray-500 font-mono">{cliente.whatsapp}</div>
                    )}
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${cliente.mensalAtivo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'} mt-1`}>
                        Mensal {cliente.mensalAtivo ? 'Ativo' : 'Inativo'}
                    </span>
                </div>
            </div>
            <button
                onClick={onToggleMensal}
                className={`mt-2 self-start px-3 py-1 rounded-full text-xs font-semibold transition
                    ${cliente.mensalAtivo ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
            >
                {cliente.mensalAtivo ? 'Tornar Inativo' : 'Tornar Ativo'}
            </button>
            {tipo === 'mensal' && 
                'cortesRestantes' in cliente && 
                'totalCortes' in cliente && 
                cliente.cortesRestantes !== undefined && 
                cliente.totalCortes !== undefined && (
                <div className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold text-blue-700">{cliente.cortesRestantes}</span> / {cliente.totalCortes} cortes restantes
                </div>
            )}
            <div className="flex gap-6 mt-3 border-t pt-3 border-gray-100">
                {cliente.whatsapp && (
                    <a
                        href={`https://wa.me/${cliente.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-600 hover:text-green-700 hover:underline transition"
                    >
                        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.768.464 3.484 1.345 4.995l-1.41 5.162 5.29-1.389c1.463.801 3.104 1.232 4.775 1.232 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.001c-1.517 0-3.001-.389-4.293-1.125l-.307-.176-3.142.825.834-3.057-.2-.315c-.813-1.276-1.247-2.747-1.247-4.152 0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.429-5.341c-.243-.122-1.438-.711-1.661-.792-.223-.081-.386-.122-.55.122-.163.243-.629.792-.771.955-.142.163-.285.183-.528.061-.243-.122-1.027-.379-1.957-1.209-.723-.645-1.213-1.441-1.355-1.684-.142-.244-.015-.376.107-.498.11-.109.243-.285.365-.427.122-.142.162-.244.243-.406.081-.163.041-.305-.02-.427-.061-.122-.55-1.329-.754-1.819-.199-.48-.401-.415-.55-.423l-.468-.008c-.163 0-.427.061-.65.305-.223.244-.853.833-.853 2.031 0 1.198.873 2.357.995 2.521.122.163 1.717 2.623 4.166 3.579.583.2 1.037.32 1.392.409.584.148 1.116.127 1.537.077.469-.056 1.438-.588 1.641-1.156.203-.568.203-1.054.142-1.156-.061-.102-.22-.163-.463-.285z"/></svg>
                        WhatsApp
                    </a>
                )}
                {cliente.instagram && (
                    <a
                        href={`https://instagram.com/${cliente.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-pink-500 hover:text-pink-600 hover:underline transition"
                    >
                        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.276.06-2.687.334-3.678 1.325-.991.991-1.265 2.402-1.325 3.678-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.276.334 2.687 1.325 3.678.991.991 2.402 1.265 3.678 1.325 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.276-.06 2.687-.334 3.678-1.325.991-.991 1.265-2.402 1.325-3.678.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.265-3.678-1.325-1.28-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                        Instagram
                    </a>
                )}
            </div>
        </div>
    )
}
