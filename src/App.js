// import logo from './logo.svg';
import './App.css';
import { Container, Col, Row } from "reactstrap";

// react-router-dom3
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// react toastify stuffs
import { ToastContainer, toast } from "react-toastify";
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import PageNotFound from "./Pages/PageNotFound"
import LandingPage from './Pages/LandingPage';
import Home from "./Pages/Home"

function App() {
  return (
    <Router>
     
      
        <ToastContainer />
    
        <Container>
          <Switch>
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/LandingPage" component={LandingPage} />
            <Route exact path="/" component={Home} />
            <Route exact path="*" component={PageNotFound} />
          
          </Switch>
        </Container>


    </Router>
  );
}

export default App;
