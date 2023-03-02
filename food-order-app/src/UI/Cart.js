import React, { useContext } from "react";

import classes from "./Cart.module.css";
import CartContext from "../store/CartContext";
import CartItem from './CartItem'
import Modal from "./Modal";

function Cart(props) {
  const CartCtx = useContext(CartContext);
  function cartItemRemoveHandler(id) {
    CartCtx.removeItem(id);
  }

  function cartItemAddHandler(item) {
    CartCtx.addItem({ ...item, quantity:1 });
  }
  
  return (
    <Modal onClick={props.onClose}>
      <ol>
        {CartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ol>
      <span className={classes.totalAmtLabel}>Total Amount</span>
      <span className={classes.totalAmt}>${CartCtx.totalAmount}</span>
      <div>
        <button
          className={`btn btn-secondary ${classes.closeBtn}`}
          onClick={props.onClose}>
          Close
        </button>
        <button
          className={`btn btn-warning ${classes.orderBtn}`}
          onClick={console.log("Ordering...")}>
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
