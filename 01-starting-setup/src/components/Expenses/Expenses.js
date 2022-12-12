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
                <ExpenseItem 
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem 
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem 
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
            </Card>
        </div>
    )
}
export default Expenses;