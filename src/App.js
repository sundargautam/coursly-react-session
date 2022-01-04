import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { name: "", age: 0 }; //inital state
    // this.asYearPassed = this.asYearPassed.bind(this);

    this.state = { kill: true };
    this.killChild = this.killChild.bind(this);
  }

  // componentDidMount() {
  //   console.log("i am born");
  //   this.setState({ name: "babag", age: 1 }); //changed state
  // }

  // componentDidUpdate() {
  //   //when state got changed
  //   console.log("my state got updated");
  // }

  // asYearPassed() {
  //   this.setState({ ...this.state, age: this.state.age +1 });
  // }

  killChild() {
    this.setState({ kill: false });
  }
  render() {
    return (
      <div className="main-app">
        {/* <h2>Welcome {this.state.name} </h2>
        <h2>My Age:{this.state.age}</h2>
        <div className="reallife">
          <button onClick={this.asYearPassed}>Year Passed</button> <br />
          <button>Gaining Experience</button>
        </div> */}
      {this.state.kill?(<Child/>):(<h1>Good by CHild</h1>)}
        <button onClick={this.killChild}>I am murderer</button>
      </div>
    );
  }
}

export default App;
