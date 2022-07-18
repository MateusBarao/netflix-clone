import "./style.css"
import Botao from "../Button"
import Logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

export default function Header(){
    return(  
        <header>
          <div>
            <img src={Logo} alt="Logo" />
            <Link to ="/about"><Botao text ="Página sobre"/></Link>
          </div>
          <div id="login">
            <select id="idioma">
              <option value="PT">Português</option>
              <option value="ING">Ingles</option>
            </select>
            <Botao text="Entrar" />
          </div>
        </header>
    )
}