import Botao from "../Button"
import "./style.css";


export default function Banner ({title, title2, text}){
  return (
    <section id="banner">
    <h1>
      {title}<br />
    </h1>
    <h2>{title2}</h2>
    <p>
      {text}
    </p>
    <div>
      <input type="email" placeholder="Email" />
      <Botao text="Vamos Lá" />
    </div>
  </section>
  )
}