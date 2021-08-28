import React,{useContext} from 'react'
import { userContext } from '../Context/UserContext'
import { Redirect } from 'react-router-dom';


const QuestionPage = ({data}) => {

  const context = useContext(userContext);  
  if (context.user == null) {
    //    toast("Signin First",{type:'info'})
    return <Redirect to="/signin"></Redirect>
  }
  else {
    data  = data["QuestionsData"]
    return (
        <table class="table">
  <thead>
    <tr>
       <th>id</th>
      <th >First</th>
      <th >Last</th>
    
    </tr>
  </thead>
  <tbody>
      {
       data.map((data,index)=>(
        <tr key={index}>
     
      <td>{index+1}</td>
      <td><a href={data.link} target="_blank"> {data.Problem}</a></td>
      <td><a href={data.video} target="_blank"> Video</a></td>
      
    </tr>
       ))   
    
}
 
  </tbody>
</table>
            
    )
 }
}


export default QuestionPage;