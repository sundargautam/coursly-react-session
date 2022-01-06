import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{
          textAlign:"center"
        }}>Want to move forward to Functional Component?</h1>

        <img style={{
          height:"50vh",
          width:"50vw",
          objectFit:"contain",
          position:"absolute",
          left:"20vw",
          top:"20vh"
        }} src="https://www.pngkey.com/png/full/96-965627_confused-person-png-animated-confused-man-clipart-png.png" alt="" />
       
       <marquee> <b style={{
          color:"red",
          fontSize:"50px",

        }}>If any confusion till now please don't feel shy to share it.We are here to learn</b></marquee>
      </div>
    );
  }
}

export default App;