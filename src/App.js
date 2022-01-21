import { BrowserRouter as Router, Link, NavLink, Redirect, Route, Switch, useParams } from "react-router-dom";
const App = () => {
  return (
    <div className="main-app">
        <Router>
          <NavLink exact to="/" activeClassName="active">Home</NavLink> 
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          <Switch>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/product/:id" component={ProductPage}/>
          <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
    </div>
  );
};

const Hompage = ()=>{
  return(
    <div className="homepage">
      <h2>I am homepage</h2>
    </div>
  )
}


const ProductPage = ()=>{
   const {id} = useParams();
  return(
    <div className="productpage">
      <h2>I am productpage {id} </h2>
    </div>
  )
}

const ContactPage = ()=>{
  return (
    <div className="contact">
      <h2>ContactPage</h2>
    </div>
  )
}

const LoginPage = ()=>{
  return (
    <div className="login">
      <h2>LoginPage</h2>
    </div>
  )
}


const NotFound = ()=>{
  return (
    <div className="notfound">
      <h2>Opps!!! Page Not Found</h2>
    </div>
  )
}



export default App;
