import "./style.css";

export default function Botao(props){
    return (<button className={props.variante}>{props.text}</button>)
};