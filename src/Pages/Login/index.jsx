import { Link } from 'react-router-dom';
import bdIMG from '../../assets/logobradev.png'
import { LayoutComponents } from '../../components/LayoutComponents';


export const Login = () =>{
    return (
        <LayoutComponents>
          <form className="login-form">
            <span className="login-form-title">Bem-vindo(a)</span>
            <span className="login-form-title">
              <img src={bdIMG} alt="BRADev logo"></img>
            </span>
            <div className="wrap-input">
              <input className="input" type="email" />
              <span className="focus-input" data-placeholder="Email">              </span>
            </div>

            <div className="wrap-input">
              <input className="input" type="password" />
              <span className="focus-input" data-placeholder="Senha">              </span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className='text-center'>
              <span className='txt1'>Não possui conta?</span>

              <Link className='txt2' to='#'>Criar conta</Link>
            </div>
          </form>
        </LayoutComponents>  
    )
}