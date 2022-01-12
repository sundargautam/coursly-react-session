import React, { Component, useEffect, useState } from "react";
import List from "./component/List";
import data from "./seed";
const App = () => {
  const [userDetails, setUserDetails] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{userDetails.length} birthdays today</h3>
        <List people={userDetails} />
        <button onClick={() => setUserDetails([])}>clear all</button>
      </section>
    </main>
  );
};

// const App = () => {
//   const [show, setShow] = useState(true);
//   return(
//     <div className="main-app">
//       {show && (<Child/>)}
//       <button onClick={(e)=>setShow(!show)}>Show / Hide Child</button>
//     </div>
//   )
// };

// const Child = () => {

//   useEffect(() => {   
//     return () => {

//       //clean up code 
//       console.log("i am dead");
//     };
//   }, []);

//   return (
//     <div className="child">
//       <h2>I am child</h2>
//     </div>
//   );
// };

export default App;
