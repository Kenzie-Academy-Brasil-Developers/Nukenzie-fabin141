import  fundo1  from "../../assets/image.svg"
import Kenzie from "../../assets/Nu-Kenzie.png"
import "./styles.css"


function HomePage({setIsLogin}){
    return(
        <div className="conteiner">
            <div className="conteiner-Title animate__zoomIn">
                <img src={Kenzie} alt="logo" />
                <h1 className="title">Centralize o controle das suas finanças</h1>
                <span className="subTitle">de forma rápida e segura</span>
                <button className="button-init" onClick={() => {
                    setIsLogin(true)}
                    }>Iniciar</button>
            </div>
            <div className="conteiner-Img">
                <img src={fundo1} alt="fundo" className="background animate__backInRight"/>
            </div>
        </div>
    )
}

export default HomePage