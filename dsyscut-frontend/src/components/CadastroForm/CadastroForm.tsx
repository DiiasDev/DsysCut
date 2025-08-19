import style from "./style.module.css"

interface CadastroFormProps {
    onShowLogin: () => void;
}

export default function CadastroForm({ onShowLogin }: CadastroFormProps) {
    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center bg-black">
                <div className="flex flex-col md:flex-row w-full h-full md:h-auto md:max-w-4xl rounded-none md:rounded-3xl overflow-hidden shadow-none md:shadow-lg bg-black">
                    {/* Lado da imagem */}
                    <div className="hidden md:flex md:w-1/2 bg-[#113666] items-center justify-center p-8">
                        {/* Você pode adicionar uma imagem aqui se quiser */}
                        <span className="inline-block w-32 h-32 bg-blue-500 rounded-3xl"/>
                    </div>
                    {/* Lado do formulário */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 px-4 md:py-12 md:px-6 bg-black">
                        <div className="mb-8 flex flex-col items-center">
                            <div className="mb-2">
                                <span className="inline-block w-8 h-8 bg-blue-500 rounded-md"/>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                                Crie sua conta
                            </h2>
                            <p className="text-sm text-gray-400 text-center">
                                Já tem uma conta? <button type="button" className="text-blue-400 hover:underline" onClick={onShowLogin}>Entrar</button>
                            </p>
                        </div>
                        <form className="w-full max-w-md flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Nome completo"
                                className="bg-[#181818] text-white px-4 py-3 rounded-md border border-gray-600 focus:border-blue-500 outline-none transition duration-200"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-[#181818] text-white px-4 py-3 rounded-md border border-gray-600 focus:border-blue-500 outline-none transition duration-200"
                            />
                            <input
                                type="text"
                                placeholder="Usuário"
                                className="bg-[#181818] text-white px-4 py-3 rounded-md border border-gray-600 focus:border-blue-500 outline-none transition duration-200"
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                className="bg-[#181818] text-white px-4 py-3 rounded-md border border-gray-600 focus:border-blue-500 outline-none transition duration-200"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black font-semibold py-3 rounded-full mt-2 hover:bg-gray-200 transition"
                            >
                                Cadastrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}