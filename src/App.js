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
import { QuestionsList } from './Components/QuestionsList';

//firebase
import firebase from 'firebase/app'
import   {firebaseConfig}  from './firebase';
import "firebase/auth"


//userContext
import { userContext } from './Context/UserContext';
import {TotalQuestionsDone} from "./Context/TotalQuestionsDone"
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);;
}else {
  firebase.app(); // if already initialized, use that one
}


const App=()=> {


  const [user,setUser] = useState(null);
  var [totalQuestions,setTotalQuestions]=useState(0);
  return (
    <Router>
        <ToastContainer />
         <userContext.Provider value={{user,setUser}}> 
         <Navbar />
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="*" component={PageNotFound} />
            <Route exact path="/home/Day-1" component={QuestionsList}/>

            


          
          </Switch>
          <Footer></Footer>
          </userContext.Provider>  
    </Router>
  );
}

export default App;
