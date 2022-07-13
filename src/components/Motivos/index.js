import "./style.css";

export default function Motivo({title, text, imagem, altImagem, alterna}) {
    // const zoomIn = (evt) =>{
    //     console.log(evt.target);
    //     const { target: img} = evt;
    //     img.style = "transform: scale(1.1); cursor:pointer"
    // }
    
    // const zoomOut = evt =>{
    //     const {target:img} = evt;
    //     img.style = "transform: scale(1)"
    // }
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
            