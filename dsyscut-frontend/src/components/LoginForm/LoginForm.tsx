import style from './style.module.css'
import logoLateral from '../../assets/logoLateral.png'
import LogoApple from '../../assets/apple-logo-svgrepo-com.svg'

interface LoginFormProps {
  onShowCadastro: () => void;
}

export default function LoginForm({ onShowCadastro }: LoginFormProps) {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col md:flex-row w-full h-full md:h-auto md:max-w-4xl rounded-none md:rounded-3xl overflow-hidden shadow-none md:shadow-lg bg-black">
          {/* Lado da imagem */}
          <div className="hidden md:flex md:w-1/2 bg-[#113666] items-center justify-center p-8">
            <img 
              src={logoLateral} 
              alt="Login Visual" 
              className="rounded-3xl w-full h-auto object-contain" 
            />
          </div>
          {/* Lado do formulário */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-8 px-4 md:py-12 md:px-6 bg-black">
            <div className="mb-8 flex flex-col items-center">
              <div className="mb-2">
                {/* Ícone fictício, substitua por seu SVG se desejar */}
                <span className="inline-block w-8 h-8 bg-blue-500 rounded-md"/>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-2">
                Bem-vindo ao DsysCut
              </h2>
              <p className="text-sm text-gray-400 text-center">
                Ainda não tem uma conta? <button type="button" className="text-blue-400 hover:underline" onClick={onShowCadastro}>Cadastre-se</button>
              </p>
            </div>
            <form className="w-full max-w-md flex flex-col gap-4">
              <input
                type="text"
                placeholder="Usuário"
                className="bg-[#181818] text-white px-4 py-3 rounded-md border border-gray-600 focus:border-blue-500 outline-none transition duration-200"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Senha"
                  className="bg-[#181818] text-white px-4 py-3 rounded-md border border-gray-600 w-full focus:border-blue-500 outline-none transition duration-200"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  tabIndex={-1}
                >
                  {/* Ícone de olho (eye-off) - opcional */}
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.02 10.02 0 0 1 12 19c-5 0-9.27-3.11-10-7 0-.34.04-.67.1-1M3.51 3.51l16.98 16.98M9.88 9.88A3 3 0 0 0 12 15c1.38 0 2.5-1.12 2.5-2.5a3 3 0 0 0-2.62-2.62"/>
                  </svg>
                </button>
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-blue-400 text-sm hover:underline">Esqueceu a senha?</a>
              </div>
              <button
                type="submit"
                className="bg-white text-black font-semibold py-3 rounded-full mt-2 hover:bg-gray-200 transition"
              >
                Entrar
              </button>
              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="mx-4 text-white text-sm">Ou</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full py-3 border border-gray-600 rounded-full bg-black text-white hover:bg-gray-900 transition"
              >
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5"/>
                Entrar com Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full py-3 border border-gray-600 rounded-full bg-black text-white hover:bg-gray-900 transition"
              >
                <img src={LogoApple} alt="Apple" className="w-5 h-5"/>
                Entrar com Apple
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}