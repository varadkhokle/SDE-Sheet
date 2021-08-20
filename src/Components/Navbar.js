import React,{useContext} from 'react'
// import { Redirect } from 'react-router-dom'
import '../App.css';
import { Link } from 'react-router-dom'
import { userContext } from '../Context/UserContext'
import firebase from 'firebase/app'
import { toast } from 'react-toastify'

const Navbar = () => {

  let currpath = window.location.pathname;
  currpath = currpath.toString();
  console.log("currpath " , currpath)   
  const context = useContext(userContext);

   console.log('@@@@@@@');

   console.log(context.user);
  function logout(){
      
       firebase.auth().signOut()
       .then(
         ()=>{
              toast('Logged out successfully' ,{type:"success"})
               context.setUser(null);
         }
       )
       .catch(
         ()=>{

         }
       )
  }

  return (
     
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to='/home' className = {`text-white nav-link `}>Home</Link>
      </li>
     
     {
      

     context.user==null?
     ( 
      <>   
      <li className="nav-item">
        <Link to='/signin' className = {`text-white nav-link `}>SignIn</Link>
      </li>

      <li className="nav-item">
        <Link to='/signup' className = {`text-white nav-link`}>signUp</Link>
      </li>
      </>
     )
     :
     (
      <li className="nav-item">
        <Link className = "text-white nav-link" to="/" onClick={logout}>logout</Link>
      </li>
     )
      
    }
    </ul>
   
  </div>
</nav>
     
  )
}

export default Navbar
