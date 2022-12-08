import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // *** ALSO A VALID ALTERNATIVE *** //
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredTitle: '',
    // });

    const titleChangedHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput, //SPREAD OPERATOR
        //     enteredTitle: e.target.value,
        // })
    }

    const amountChangedHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput, //SPREAD OPERATOR
        //     enteredAmount: e.target.value,
        // })
    }

    const dateChangedHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput, //SPREAD OPERATOR
        //     enteredDate: e.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)

        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>

            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                    type='text' 
                    value={enteredTitle} 
                    onChange={titleChangedHandler}
                />
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                type='number' 
                min='0.01' 
                step='0.01' 
                value={enteredAmount}
                onChange={amountChangedHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                type='Date' 
                min='2019-01-01' 
                max='2022-12-31' 
                value={enteredDate}
                onChange={dateChangedHandler}/>
            </div>

        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;