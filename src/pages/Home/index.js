import "./netflix.css";
import Motivo1 from "../../assets/images/motivo-1.png"
import Motivo2 from "../../assets/images/motivo-2.png"
import Motivo from "../../components/Motivos";
import Divisor from "../../components/Divisor";
import MOTIVOS from "../../constantes/motivos"
import BANNER from "../../constantes/banner";
import Header from "../../components/Header"
import Banner from "../../components/Banner"

function Home(){
  return (
    <div>
      <Header/>
      <Banner title = {BANNER.ONE.TITLE} title2 = {BANNER.TWO.TITLE} text ={BANNER.ONE.TEXT}/>
      <Divisor />
      <Motivo  imagem ={Motivo1} altImagem="Motivo 1" title ={MOTIVOS.ONE.TITLE} text ={MOTIVOS.ONE.TEXT}/>
      <Divisor />
      <Motivo alterna ={true} imagem ={Motivo2} altImagem="Motivo 2" title ={MOTIVOS.ONE.TITLE} text ={MOTIVOS.ONE.TEXT}/> 
      <Divisor/>
    </div>
  )
}

export default Home;
