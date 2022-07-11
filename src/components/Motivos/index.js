import "./style.css";

export default function Motivo({title, text, imagem, altImagem, alterna}) {
    return (
        <section className={`motivos ${alterna && "alterna"}`}>
            <div>
                <h1>
                    {title}</h1>
                <p>
                    {text}
                </p>
            </div>
            <div>
                <img src={imagem} alt={altImagem} />
            </div>
        </section>
    )
}
            