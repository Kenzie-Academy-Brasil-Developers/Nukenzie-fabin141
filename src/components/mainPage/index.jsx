import Kenzie from "../../assets/Nu-Kenzie-black.png"
import { useState } from "react";
import { ListInput } from "../list";
import { Form } from "../form";
import { ValorTotal} from "../totalValue"
import "./styles.css"


function MainPage({setIsLogin}){
    
    const [list, setList] = useState([])
    const [filter, setFilter] = useState(list)

    return(
        <>
            <header className="header-main">
                <img src={Kenzie} alt="logo" />
                <button onClick={() => {setIsLogin(false)}}>Inicio</button>
            </header>
            <main className="main-conteiner">
                <div className="conteiner-div">
                    <Form list={list} setList={setList} setFilter={setFilter}/>
                    <div>
                        <ListInput list={list} setList={setList} filter={filter} setFilter={setFilter}/>
                    </div>
                    
                   
                    <ValorTotal list={list}/>
                    
                </div>
                
            </main>
        </>
    )
}

export default MainPage