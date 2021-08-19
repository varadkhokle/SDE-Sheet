// import logo from './logo.svg';
import {useState} from 'react'
import './App.css';


// react-router-dom3
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// react toastify stuffs
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//components
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import PageNotFound from "./Pages/PageNotFound"
import LandingPage from './Pages/LandingPage';
import Home from "./Pages/Home"

//firebase

import firebase from 'firebase/app'
import   {firebaseConfig}  from './firebase';
import "firebase/auth"


//userContext

import { userContext } from './Context/UserContext';

firebase.initializeApp(firebaseConfig);

function App() {


  const [user,setUser] = useState({})
  return (
    <Router>
     
      
        <ToastContainer />
    
        <div className="container">
         <userContext.Provider value={{user,setUser}}> 
          <Switch>
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/LandingPage" component={LandingPage} />
            <Route exact path="/" component={Home} />
            <Route exact path="*" component={PageNotFound} />
          
          </Switch>
          </userContext.Provider>
        </div>


    </Router>
  );
}

export default App;
