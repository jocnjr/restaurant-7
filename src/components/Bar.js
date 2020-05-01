import React from "react";

const Bar = (props) => {
  return (
    <div className="component">
      <h1>Bar</h1>
      <h2>Total Orders (props.orders): {props.orders}</h2>
      <button onClick={props.newOrder}>Add Order</button>
    </div>
  );
};

export default Bar;
