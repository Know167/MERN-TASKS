import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  function onDeleteHandler() {
    const ExpenseId = props.id;
    props.onDelete(ExpenseId);
  }
    return (
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button
          style={{ background: "rgb(255,255,255)", width: "5%" }}
          onClick={onDeleteHandler}
        >delete
        </button>
      </div>
    );
  
}

export default ExpenseItem;
