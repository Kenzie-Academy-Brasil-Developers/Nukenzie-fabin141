import { useState } from "react"
import "./styles.css"

export function Form({setList, setFilter, list}){
   
    // const [name, setName] = useState('');
    // function handleSubmit(event){
    //     event.preventDefault();

    //         const user = {
    //             name :'',
    //             tipo: '',
    //             value: 0,
    //         }
    
           
    //     }
        return (
            <div className="conteiner-form">
            <form className="form" >
                <label htmlFor="description" className="label-description">Descrição</label>
                <input type="text" className="input-description"
                placeholder="Digite aqui sua descrição" name="description"
                />

                <span>Ex: Compra de roupas</span>
                <div className="conteiner-input-type">
                    <div className="div-input">
                        <label htmlFor="value">Valor</label>
                        <input type="number" placeholder="1" name="value"/>
                    </div>
                    <div className="div-input select">
                        <label htmlFor="type">Tipo de valor</label>
                        <select name="type">
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

