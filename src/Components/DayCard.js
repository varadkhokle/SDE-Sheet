import React,{useContext} from 'react'
import { Redirect } from 'react-router-dom';
import {Card,CardBody,CardTitle,CardText} from "reactstrap"
import { QuestionsDataContext } from '../Context/QuestionsDataContext';

const DayCard = ({details}) => {
  const dataContext=useContext(QuestionsDataContext);

const goToQuestions=(details)=>{
  dataContext.setQuestionDatas(details.QuestionDatas);
  console.log(details.QuestionDatas);
 <Redirect to="/home/Day-1"></Redirect>
}

    return (
    <Card>
        <CardBody className="text-center">
          Day:{details.Day}<br/>
          Topic:{details.Topic}<br/>
          Total No of Questions:{details.Total_Questions}<br/>
         
          <button onClick={(details)=>{
            return goToQuestions(details)
          }} className="btn btn-primary">Solve</button>

 
        </CardBody>
    </Card>
    )
}
export default DayCard;
