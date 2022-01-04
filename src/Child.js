import React, { Component } from "react";

class Child extends Component {
  componentDidMount() {
    console.log("i am child, and i am born");
  }

  componentWillUnmount() {
    console.log("Good bye earth");
  }
  render() {
    return (
      <div>
        <h1>I am child</h1>
      </div>
    );
  }
}

export default Child;
