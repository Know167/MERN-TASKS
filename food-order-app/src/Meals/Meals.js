import React from "react";
import classes from "./Meals.module.css";
import FoodItem from "./FoodItem";

function Meals() {
  const foodItems = [
    { id: 'fi-1', name: "Pizza", price: 200, quantity: 0 },
    { id: 'fi-2', name: "Burger", price: 80, quantity: 0 },
    { id: 'fi-3', name: "Sandwich", price: 50, quantity: 0 },
    { id: 'fi-4', name: "Fries", price: 50, quantity: 0 },
    { id: 'fi-5', name: "Puff", price: 30, quantity: 0 },
    { id: 'fi-6', name: "Pasta", price: 150, quantity: 0 },
  ];
  return (
    <div className={classes.meals}>
      {foodItems.map((item) => (
        <FoodItem
          name={item.name}
          key={item.id}
          id={item.id}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Meals;
