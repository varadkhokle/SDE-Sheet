import React,{useState,useContext} from 'react'
import signupPic from "../images/signup.jpg"
import {toast} from "react-toastify"
import firebase from 'firebase/app'
import { Redirect } from 'react-router-dom'
import { userContext } from '../Context/UserContext'
const Signup = () => {

   
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const context = useContext(userContext); 
   
    function onInputChange(e){
         if(e.target.name==="email")
         {
             setEmail(e.target.value);
         }
         else
         {
             setPassword(e.target.value);
         }
   }

   function onFormSubmit(e)
   {
        e.preventDefault();
        
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((res)=>{
          console.log(res);
          toast('Registered Successfully',{type:'success'})
          context.setUser({email:res.user?.email,uid:res.user.uid});
      })
      .catch(
          (error)=>{
              console.log(error)
              let ce = error.message;
              console.log(ce);
              toast(ce,{type:'error'})
          }
      )

      
      
      
   }  

   if(context.user?.uid)
   {
          
          return <Redirect to='/'></Redirect>
   }
   else
   { 
    return (
        <div>
        
        <div className="card mb-3" style= {{maxWidth:"540px"}}>
          <div className="row">
              <div className = "col-md-8">
                  <form autoComplete = "off" onSubmit = {onFormSubmit}>
                  <div className="form-group">
                  <label htmlFor="email">Email address</label>
                <input 
                 type="email" 
                 className="form-control" 
                  name="email" 
                  value = {email}
                  onChange = {onInputChange}
                 aria-describedby="emailHelp"
                 required 
                 />
                  </div>
                
                  <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    onChange = {onInputChange}
                    value = {password}
                    required
                    aria-describedby="password" 
                 />
                  </div> 
                  <button type="text" onClick={onFormSubmit} className="btn btn-primary">Submit</button>
                  </form>
              </div>
             
              <div className = "col-md-4">
                 <img src = {signupPic} alt = "..."  className = "img-fluid"/>
              </div>
          </div>
        </div>
           

        </div>
    )
   }
}

export default Signup
