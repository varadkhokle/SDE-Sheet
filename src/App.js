// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';


// react-router-dom3
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// react toastify stuffs
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//components
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import PageNotFound from "./Pages/PageNotFound"
import LandingPage from './Pages/LandingPage';
import Home from "./Pages/Home"
import QuestionPage from "./Components/QuestionPage"

//firebase

import firebase from 'firebase/app'
import { firebaseConfig } from './firebase';
import "firebase/auth"
import Axios from "axios"


//userContext

import { userContext } from './Context/UserContext';
import { doneContext } from './Context/DoneContext';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);;
} else {
  firebase.app(); // if already initialized, use that one
}


function App() {

  var doneArr = new Array(30);
   
  for (var i = 0; i < 30 ; i++) {
    doneArr[i] = new Array(11);
    doneArr[i].fill(-1);

}
  
  const [sheetData, setSheetData] = useState([]);
  const [done,setDone] = useState(doneArr) ; 

  const fetchDetails = async () => {
    const { data } = await Axios.get("http://myjson.dit.upm.es/api/bins/gd4");
    setSheetData(data);
  }

  useEffect(() => {
    fetchDetails();
  }, [])


  const [user, setUser] = useState(null)
  return (
    <Router>
      <ToastContainer />
      <userContext.Provider value={{ user, setUser }}>
        <doneContext.Provider value={{done,setDone}}>
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/Day-1" children={<QuestionPage data={sheetData[0]} day = {0} />} />
          <Route exact path="/home/Day-2" children={<QuestionPage data={sheetData[1]} day = {1} />} />

          {/* <Route exact path="/home/Day-3" children={<QuestionPage data={sheetData[2].QuestionsData} />} />
          <Route exact path="/home/Day-4" children={<QuestionPage data={sheetData[3].QuestionsData} />} />
          <Route exact path="/home/Day-5" children={<QuestionPage data={sheetData[4].QuestionsData} />} />
          <Route exact path="/home/Day-6" children={<QuestionPage data={sheetData[5].QuestionsData} />} />
          <Route exact path="/home/Day-7" children={<QuestionPage data={sheetData[6].QuestionsData} />}/>
          <Route exact path="/home/Day-8" children={<QuestionPage data={sheetData[7].QuestionsData} />} />
          <Route exact path="/home/Day-9" children={<QuestionPage data={sheetData[8].QuestionsData} />} />
          <Route exact path="/home/Day-10" children={<QuestionPage data={sheetData[9].QuestionsData} />} />
          <Route exact path="/home/Day-11" children={<QuestionPage data={sheetData[10].QuestionsData} />}/>
          <Route exact path="/home/Day-12" children={<QuestionPage data={sheetData[11].QuestionsData} />} />
          <Route exact path="/home/Day-13" children={<QuestionPage data={sheetData[12].QuestionsData} />} />
          <Route exact path="/home/Day-14" children={<QuestionPage data={sheetData[13].QuestionsData} />} />
          <Route exact path="/home/Day-15" children={<QuestionPage data={sheetData[14].QuestionsData} />} />
          <Route exact path="/home/Day-16" children={<QuestionPage data={sheetData[15].QuestionsData} />} />
          <Route exact path="/home/Day-17" children={<QuestionPage data={sheetData[16].QuestionsData} />} />
          <Route exact path="/home/Day-18" children={<QuestionPage data={sheetData[17].QuestionsData} />} />
          <Route exact path="/home/Day-19" children={<QuestionPage data={sheetData[18].QuestionsData} />} />
          <Route exact path="/home/Day-20" children={<QuestionPage data={sheetData[19].QuestionsData} />} />
          <Route exact path="/home/Day-21" children={<QuestionPage data={sheetData[20].QuestionsData} />} />
          <Route exact path="/home/Day-22" children={<QuestionPage data={sheetData[21].QuestionsData} />} />
          <Route exact path="/home/Day-23" children={<QuestionPage data={sheetData[22].QuestionsData} />} />
          <Route exact path="/home/Day-24" children={<QuestionPage data={sheetData[23].QuestionsData} />} />
          <Route exact path="/home/Day-25" children={<QuestionPage data={sheetData[24].QuestionsData} />} />
          <Route exact path="/home/Day-26" children={<QuestionPage data={sheetData[25].QuestionsData} />} />
          <Route exact path="/home/Day-27" children={<QuestionPage data={sheetData[26].QuestionsData} />} />
          <Route exact path="/home/Day-28" children={<QuestionPage data={sheetData[27].QuestionsData} />} />
          <Route exact path="/home/Day-29" children={<QuestionPage data={sheetData[28].QuestionsData} />} />
          <Route exact path="/home/Day-30" children={<QuestionPage data={sheetData[29].QuestionsData} />} /> */}

         

          <Route exact path="*" component={PageNotFound} />



        </Switch>
        <Footer></Footer>
        </doneContext.Provider>
      </userContext.Provider>

    </Router>

  );
}

export default App;
