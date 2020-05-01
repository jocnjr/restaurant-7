import React from "react";

const Saloon = (props) => {
  return (
    <div className="component">
      <h1>Saloon</h1>
      <h2>Total Orders (props.orders): {props.orders}</h2>
      <button onClick={props.newOrder}>Add Order</button>
    </div>
  );
};

export default Saloon;
