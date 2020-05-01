import React, { Component } from "react";
import Bar from "./Bar";
import MainRoom from "./MainRoom";

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: 0,
      barOrders: 0,
      loungeOrders: 0,
      saloonOrders: 0,
    };

    this.newOrder = this.newOrder.bind(this);
  }

  newOrder(local) {
    console.log("new order is coming", local);

    this.setState({
      [local]: this.state[local] + 1,
      orders: this.state.orders + 1,
    });
  }

  render() {
    console.log("restaurant render");

    const { barOrders, ...mainRoomOrders } = this.state;

    return (
      <div className="component">
        <h1>Restaurant - lifting the state UP!</h1>
        <h2>Total Orders (this.state.orders): {this.state.orders}</h2>
        <Bar
          orders={this.state.orders}
          barOrders={barOrders}
          newOrder={this.newOrder}
        />
        <MainRoom newOrder={this.newOrder} {...mainRoomOrders} />
      </div>
    );
  }
}

export default Restaurant;
