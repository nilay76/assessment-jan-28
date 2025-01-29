import React from "react";
import { useState } from "react";


export default function ATMDispencer(props){
    const [amount, setAmount] = useState(0);
    const [denominations, setDenominations] = useState('');

    const handleInputChange = (e) => {
        setAmount(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDenominations(getDenominations(amount));
    }

    const getDenominations = (amount) => {
        const hundreds = Math.floor(amount / 100);
        const fifties = Math.floor( (amount - hundreds*100)/ 50);
        const twenties = Math.floor( (amount - hundreds*100 - fifties*50)/ 20);
        const tens = Math.floor( (amount - hundreds*100 - fifties*50 - twenties*20)/ 10);
        const fives = Math.floor( (amount - hundreds*100 - fifties*50 - twenties*20 - tens*10)/ 5);
        const ones = Math.floor((amount - hundreds*100 - fifties*50 - twenties*20 - tens*10 -fives*5 ));

        const totalNotes = hundreds+fifties+twenties+tens+fives+ones;
        return `
        Total notes dispensed: ${totalNotes} \n
        $100 notes dispensed: ${hundreds} \n
        $50 dispensed: ${fifties} \n
        $20 dispensed: ${twenties} \n
        $10 dispensed: ${tens} \n
        $5 dispensed: ${fives} \n
        $1 dispensed: ${ones} \n
        `;
    }

    return (
        <>
            <label htmlFor="withdrawal">Enter withdrawal Amount</label>
            <input id="withdrawal" type="number" min="0"  step="1" onChange={handleInputChange} value={amount}/>
            <button type="button" onClick={handleSubmit} >Withdraw</button>
            <pre>{denominations}</pre>
        </>
    )
}