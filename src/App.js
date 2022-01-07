import { useState } from "react";
const App = () => {
  const [info, setInfo] = useState({name:"",age:0,class:8,address:{
    city:{
      zip:"ss",
      postal:""
    }
  }});

  return (
    <div className="main-app">
      <h2>Name: {info.name} </h2>
      <h1>Age:{info.age}</h1>
      <h3>{info.class}</h3>
      <button
       onClick={(e)=>{
            setInfo(prevState=>({...prevState,name:"xyz"}))

         
        }} >Change Name</button>
      {/* <button onClick={}>Change Age</button> */}
    </div>
  );
};

export default App;
