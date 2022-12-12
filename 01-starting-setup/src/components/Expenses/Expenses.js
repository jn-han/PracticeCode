import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import React, { useState } from 'react'
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {
    const [currentYear, setCurrentYear] = useState('2020');

    const yearDataHandler = (yearData) => {
        setCurrentYear(yearData);
        console.log(currentYear)
        console.log(yearData);
    } 
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={currentYear} yearDataHandler={yearDataHandler}/>
                {props.items.map( expense => (
                    <ExpenseItem 
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