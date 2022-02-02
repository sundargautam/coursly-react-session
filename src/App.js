import "./App.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import Banner from "./component/Banner/Banner";
import Customnavbar from "./component/CustomNavbar/CustomNavbar";
import Footer from "./component/Footer/Footer";
import Home from './pages/Home/Home';
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Container className="app-inner-wrapper">
          <Banner banner="Breaking News" />
          <Customnavbar />
          <div className="main-app">
            <Switch>
            <Route
                exact
                path="/"
                render={() => <Home pageTitle="Latest News" />}
              />
              {/* <Route
                exact
                path="/"
                render={() => <Home pageTitle="Latest News" />}
              />
              <Route
                path="/business"
                render={() => <Business pageTitle="Business News" />}
              /> */}
            </Switch>
          </div>
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
