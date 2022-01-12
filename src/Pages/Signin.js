import React,{useState,useContext} from 'react'
//firebase 
import firebase from 'firebase/app'
//toast
import {toast} from "react-toastify"
//context
import {userContext} from "../Context/UserContext"
//Redirection
import { Link, Redirect } from 'react-router-dom'
//image
import signupPic from "../images/signup.jpg"

const Signin = () => {

   const[email,setEmail] = useState('');
   const [password,setPassword] = useState('');

   const context = useContext(userContext)
    
   function onFormSubmit(e){
      e.preventDefault();

      firebase.auth().signInWithEmailAndPassword(email,password)
       .then(
           (res)=>{
               context.setUser({email:res.user?.email,uid:res.user?.uid});

               toast('Logged In Successfully',{type:'success'})
           }
       )
       .catch(
           (error)=>{
              toast(error.message,{type:"error"});
           }
       )
   }

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

    if(context.user)
    {
       return <Redirect to="/home"></Redirect>
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
                      <button type="text" onClick={onFormSubmit} className="btn btn-primary">SignIn</button>
                       <br />
                     <Link className = "text-primary" to="/signup" >Not a User? Register Here</Link>
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

export default Signin
