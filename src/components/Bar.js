import React from "react";

const Bar = (props) => {
  return (
    <div className="component">
      <h1>Bar</h1>
      <h2>Bar Orders (props.barOrders): {props.barOrders}</h2>
      <h2>Total Orders (props.orders): {props.orders}</h2>
      <button onClick={() => props.newOrder("barOrders")}>Add Order</button>
    </div>
  );
};

export default Bar;
