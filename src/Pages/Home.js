import React,{useContext} from 'react'
import { userContext } from '../Context/UserContext'
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
const Home = () => {

    console.log("at home")
   const context = useContext(userContext);

   if(context.user==null)
   {
    //    toast("Signin First",{type:'info'})
        return <Redirect to="/signin"></Redirect>   
   }
   else
   {
     return (
         <div>
            SDE SHEET
         </div>
     )
   } 
}

export default Home
