import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../Context/UserContext'
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import Axios from "axios";

import { DayCard } from '../Components/DayCard';
const Home = () => {

  const [sheetData, setSheetData] = useState([]);

  const fetchDetails = async () => {
    const { data } = await Axios.get("http://myjson.dit.upm.es/api/bins/1mpt");
    setSheetData(data);
   

  }

  useEffect(() => {
    fetchDetails();
  }, [])


  const context = useContext(userContext);  //for user authentication check

  if (context.user == null) {
    //    toast("Signin First",{type:'info'})
    return <Redirect to="/signin"></Redirect>
  }
  else {
    return (
      <div>
        {
          sheetData.map(details => (
            <div className="row">
              <div className="col-4"><DayCard details={details}></DayCard></div>
            </div>

          ))
        }
      </div>
    )
  }
}

export default Home
