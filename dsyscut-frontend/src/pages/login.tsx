import CabecalhoLogin from '../components/CabecalhoLogin/cabecalhoLogin'
import FormLogin from '../components/FormLogin/formLogin'
import './login.css'

export default function Login(){
    return(
        <div className="login-container">
            <CabecalhoLogin/>
            <FormLogin/>
        </div>
    )
}