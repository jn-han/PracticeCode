import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import React, { useState } from 'react'
import ExpensesFilter from "./ExpensesFilter";


function Expenses( props ) {
    const [currentYear, setCurrentYear] = useState('2020');

    const yearDataHandler = (yearData) => {
        setCurrentYear(yearData);
    } 

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === currentYear;
    });
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={currentYear} yearDataHandler={yearDataHandler}/>
                {filteredExpenses.map( expense => (
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />
                ))}
            </Card>
        </div>
    )
}
export default Expenses;