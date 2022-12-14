import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React from 'react'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.ExpenseDataHandler(expenseData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>


};

export default NewExpense;