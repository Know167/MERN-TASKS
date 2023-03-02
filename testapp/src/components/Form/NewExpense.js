import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  let onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  

  return (
    <div className="new_expense">
      <div className="new_expense_heading">Add new expense</div>
      <div className="new_expense_hr"></div>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
