import "./styles.css"

export function ValorTotal({list}){
    const valorFull = list.reduce((acc, elem) => acc + Number(elem.value), 0)
    return(
        <ul className="conteiner-value">
            <li className="valueTotal">Valor total: <span>R$ {valorFull}</span></li>
            <li>O valor se refere ao saldo</li>
        </ul>
    )
}

