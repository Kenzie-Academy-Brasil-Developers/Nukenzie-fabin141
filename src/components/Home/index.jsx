import { useState } from "react"
import './style.css'
import noCard from '../../assets/NoCard.png'
import Header from "../Header"
import Form from "../Form"
import Filter from "../Filter"
import List from "../List"

export default function Home ({setlogin}){
    const [transactionList, setTransactionList] = useState([])
    const [totalValue, setTotalValue] = useState(0)

    return(
        <>
            <Header setlogin={setlogin}/>
            <main className="accountPage">
                <section className="form--section">
                    <Form transactionList={transactionList} setTransactionList={setTransactionList} totalValue={totalValue} setTotalValue={setTotalValue}/>
                </section>
                <section className="list--section">
                    <Filter transactionList={transactionList} setTransactionList={setTransactionList}/>
                    {transactionList.length ? (
                        <List transactionList={transactionList} setTransactionList={setTransactionList} setTotalValue={setTotalValue}/> 
                    ):(
                        <div className="noCard">
                            <img src={noCard} alt="no card"></img>
                            <img src={noCard} alt="no card"></img>
                            <img src={noCard} alt="no card"></img>
                        </div>
                    )}
                </section>
            </main>
        </>
    )
}