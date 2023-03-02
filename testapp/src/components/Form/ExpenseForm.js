import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      id: Math.random(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }
  return (
    <form className="expense_form" onSubmit={submitHandler}>
      <div className="expense_form_input">
        <div className="field title">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="field amount">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="field date">
          <label>Date</label>
          <input type="Date" value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <button type="submit">ADD Expense</button>
    </form>
  );
}

export default ExpenseForm;
