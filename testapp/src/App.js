import { useState } from "react";

import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/Form/NewExpense";
import ExpensesFilter from "./extra/filter/ExpensesFilter";
import ExpensesChart from "./components/ExpensesChart";
function App() {
  const [Expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  function addExpenseDataHandler(expenseData) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  }

  function deleteExpenseDataHandler(ExpenseId) {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((item) => item.id !== ExpenseId);
      
      return updatedExpenses;
    });
  }

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let FilteredExpenses =
    filteredYear === "all"
      ? Expenses
      : Expenses.filter(
          (item) => item.date.getFullYear().toString() === filteredYear
      );
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="New_Expense_form">
        <NewExpense onAddExpense={addExpenseDataHandler} />
      </div>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      <ExpensesChart Expenses={FilteredExpenses} />
      <div>
        {FilteredExpenses.length === 0 ? (
          <p>No such expenses found.</p>
        ) : (
          FilteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              onDelete={deleteExpenseDataHandler}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
