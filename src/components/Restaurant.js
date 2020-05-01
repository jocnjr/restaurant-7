import React, { Component } from "react";
import Bar from "./Bar";
import MainRoom from "./MainRoom";

class Restaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: 0,
      barOrders: 0,
    };

    this.newOrder = this.newOrder.bind(this);
  }

  newOrder() {
    console.log("new order is coming");

    this.setState({
      orders: this.state.orders + 1,
    });
  }

  render() {
    console.log("restaurant render");
    return (
      <div className="component">
        <h1>Restaurant - lifting the state UP! {this.props.id}</h1>
        <h2>Total Orders (this.state.orders): {this.state.orders}</h2>
        <Bar orders={this.state.orders} newOrder={this.newOrder} />
        <MainRoom orders={this.state.orders} newOrder={this.newOrder} />
      </div>
    );
  }
}

export default Restaurant;
