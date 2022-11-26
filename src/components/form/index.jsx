import { useState } from "react"
import "./styles.css"

export function Form({setList, setFilter, list}){
    const [inputdescription, setInputDescription] = useState("")
    const [inputValue, setInputValue] = useState(0)
    const [inputType, setInputType] = useState("")
    // const [id, setId] = useState(1)



    return (
        <div className="conteiner-form">
            <form className="form" onSubmit={(event) => {
                event.preventDefault()
                if(inputdescription.length !== 0 && inputValue !== "" && inputValue !== "0" && inputType !== "") {

                }
            }}>

                <label htmlFor="description" className="label-description">Descrição</label>
                <input type="text" className="input-description"
                placeholder="Digite aqui sua descrição" name="description"
                onChange={(event) => setInputDescription(event.target.value)}/>

                <span>Ex: Compra de roupas</span>
                <div className="conteiner-input-type">
                    <div className="div-input">
                        <label htmlFor="value">Valor</label>
                        <input type="number" placeholder="1" name="value" onChange={(event) => setInputValue(event.target.value)}/>
                    </div>
                    <div className="div-input select">
                        <label htmlFor="type">Tipo de valor</label>
                        <select name="type" onChange={(event) => setInputType(event.target.value)}>
                            <option value="" className="select-init">Selecione um tipo</option>
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option>
                        </select>
                    </div>
                </div>


                <button type='submit'>Inserir Valor</button>
            </form>
        </div>
    )
}
