import React, { useState } from 'react';


export default function CalculatorTest() {
    //take in two numbers and an operator and console log response
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [calculatedTotal, setCalcualtedTotal] = useState(0)
    const [operator, setOperator] = useState('')

    function solution() {
        let total;
        switch (operator) {
            case '+':
                total = parseInt(num1) + parseInt(num2)
                setCalcualtedTotal(total)
                break;
            case '-':
                total = parseInt(num1) - parseInt(num2)
                setCalcualtedTotal(total)
                break;
            case '*':
                total = parseInt(num1) * parseInt(num2)
                setCalcualtedTotal(total)
                break;

            default:
                total = parseInt(num1) / parseInt(num2)
                setCalcualtedTotal(total)
                break;
        }
    }
    // create an onchange function that will capture the user input for the number



    return (
        <div className='border-dotted border-2 border-sky-500'>
            <div>
                <input type='number' className='border-solid border-2 border-black-500 mx-2 mb-3' value={calculatedTotal} disabled />
            </div>

            <input type='number' className='border-solid border-2 border-sky-500 mx-2 mb-3' placeholder='num1' value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" className='border-solid border-2 border-sky-500 mx-2 mb-3' placeholder='num2' value={num2} onChange={(e) => setNum2(e.target.value)} />
            <div className='flex-row space-x-4'>
                <button className='rounded-full bg-slate-500 w-10' onClick={() => setOperator('+')}>+</button>
                <button className='rounded-full bg-slate-500 w-10' onClick={() => setOperator('-')}>-</button>
                <button className='rounded-full bg-slate-500 w-10' onClick={() => setOperator('*')}>*</button>
                <button className='rounded-full bg-slate-500 w-10' onClick={() => setOperator('/')}>/</button>
            </div>
            <button className='rounded-full bg-slate-500 mt-6 p-2' onClick={() => solution()}>Calculate</button>
        </div>
    )
}
