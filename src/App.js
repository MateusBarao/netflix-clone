
import "./netflix.css";
import Logo from "./assets/images/logo.png"
import Motivo1 from "./assets/images/motivo-1.png"
import Motivo2 from "./assets/images/motivo-2.png"
import Botao from "./components/Button";
import Motivo from "./components/Motivos";
import Divisor from "./components/divisor";
import MOTIVOS from "./constantes/motivos";

function App(){
  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div id="login">
          <select id="idioma">
            <option value="PT">Português</option>
            <option value="ING">Ingles</option>
          </select>
          <Botao text="Entrar" />
        </div>
      </header>
      <section id="banner">
        <h1>
          Filmes, séries e muito <br />
          mais. Sem limites.
        </h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <p>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        <div>
          <input type="email" placeholder="Email" />
          <Botao text="Vamos Lá" />
        </div>
      </section>
      <Divisor />
      <Motivo  imagem ={Motivo1} altImagem="Motivo 1" title ={MOTIVOS.ONE.TITLE} text ={MOTIVOS.ONE.TEXT}/>
      <Divisor />
      <Motivo alterna ={true} imagem ={Motivo2} altImagem="Motivo 2" title ={MOTIVOS.ONE.TITLE} text ={MOTIVOS.ONE.TEXT}/> 
      <Divisor/>
    </div>
  )
}

export default App;
