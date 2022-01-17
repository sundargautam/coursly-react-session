import React, { useState } from "react";
const App = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="main-app">
      <h2>I am main App {count}</h2>
  
      <Child1 count={count} setcount={setcount}/>
      <Child2 count={count} setcount={setcount}/>
    </div>
  );
};

const Child1 = ({count,setcount}) => {
  return (
    <div className="child1">
      <h2>I am child1 {count}</h2>
      <Child1A count={count}/>
      <Child1B count={count} setcount={setcount}/>
    </div>
  );
};

const Child2 = ({count,setcount}) => {
  return (
    <div className="child2">
      <h2>I am child2 {count}</h2>
      <Child2A count={count}/>
      <Child2B count={count} setcount={setcount}/>
    </div>
  );
};

const Child1A = ({count}) => {
  return (
    <div className="child1a">
      <h2>Child1A {count}</h2>
    </div>
  );
};

const Child1B = ({count,setcount}) => {
  return (
    <div className="child1B">
      <h2>Child1B {count}</h2>
      <button onClick={(e)=>setcount(count+1)}>Increment count from Child1B</button>
    </div>
  );
};

const Child2A = ({count}) => {
  return (
    <div className="child2a">
      <h2>Child2A {count}</h2>
    </div>
  );
};

const Child2B = ({count,setcount}) => {
  return (
    <div className="child2B">
      <h2>Child2B {count}</h2>
      <button onClick={(e)=>setcount(count-1)}>Decrement count from main</button>
    </div>
  );
};
export default App;
