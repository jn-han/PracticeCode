import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.lof(expenseData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData />
    </div>





};

export default NewExpense;