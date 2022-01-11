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

export default App;
