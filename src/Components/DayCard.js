import React from 'react'
import { Link, Redirect } from 'react-router-dom';


export const DayCard = ({details}) => {

const goToQuestions=()=>{
return <Redirect ></Redirect>
}

    return (
        <div>
           <div className="card">
               <div className="card-body">
                   Day:{details.Day}
                   Topic:{details.Topic}
                   T_Questions:{details.Total_Questions}
               </div>
              <Link to={"/home/Day-"+details.Day}> <div className="btn bg-primary">Solve</div></Link>
           </div>
        </div>
    )
}
