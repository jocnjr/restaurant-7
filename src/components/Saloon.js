import React from "react";

const Saloon = (props) => {
  return (
    <div className="component">
      <h1>Saloon</h1>
      <h2>Saloon Orders (props.saloonOrders): {props.saloonOrders}</h2>
      <h2>Total Orders (props.orders): {props.orders}</h2>
      <button onClick={() => props.newOrder("saloonOrders")}>Add Order</button>
    </div>
  );
};

export default Saloon;
