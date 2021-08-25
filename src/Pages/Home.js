//react imports 
import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

//Api imoprts and contexts imports
import Axios from 'axios';
import { userContext } from '../Context/UserContext'

//reactstrap imports
import { Container } from 'reactstrap';
import { Row, Col } from "reactstrap"

//components imports
import DayCard from '../Components/DayCard';
import { QuestionsDataContext } from '../Context/QuestionsDataContext';

const Home = () => {

  const [dayCardData, setDayCardData] = useState([]);
  var [questionDatas,setQuestionDatas]=useState([]);

  const fetchDetails = async () => {
    const { data } = await Axios.get("http://myjson.dit.upm.es/api/bins/kfh");
    const dayWiseData = data.Sheet;
    console.log(dayWiseData);
    setDayCardData(dayWiseData);
 
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  const context = useContext(userContext);
  

  if (context.user == null) {
    return <Redirect to="/signin"></Redirect>
  }

  else {
    return (
      <Container fluid>
        <Row>
          {dayCardData.map(details => (
            <Col md={3} key={details.Day}>
              <QuestionsDataContext.Provider value={{questionDatas,setQuestionDatas}}>
              <DayCard details={details} />
              </QuestionsDataContext.Provider>
            </Col>

          ))}
        </Row>
      </Container>

    )
  }
}


export default Home
