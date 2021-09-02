import React, { useContext,useEffect,useState } from "react";
import { userContext } from "../Context/UserContext";
import { doneContext } from "../Context/DoneContext";
import { Redirect } from "react-router-dom";

//FIRBASE STUFF 

//toast stuff

import {toast} from "react-toastify"

import firebase from 'firebase/app'
import "firebase/database"

import "../Styles/modal.css";
const QuestionPage = ({ data,day }) => {


   console.log("rerendered questionPage");

  let {done,setDone} = useContext(doneContext)
  const context = useContext(userContext);

  useEffect(()=>{
    
    const uid = context.user?.uid
    const firedb = firebase.database().ref(`done/${uid}`);
    //a reference with real time data base of the firebase 
    
     firedb.on("value",(snapshot)=>{
     
      console.log("i am here");

      if(snapshot.val()!==null)
      {
        console.log("zindagi sawaar doon")
       console.log(snapshot.val())
        setDone(snapshot.val());
      }
       else
       setDone(done); 

     })

     
  },[])


  function myfunc(link) {
    let url = "" + link;
    url = url.replace(/watch/gi, "embed");
    document.getElementById("video").src = "" + url;
  }

  function closingfunc() {
    document.getElementById("video").src = "";
  }

 

   
  function donefunc(uid,index)
  {
   
   

   let checkbox = document.getElementById(index);
  
   if(checkbox.checked===true)
   {
    done[day][index]=index+1;
   
    const str = `Day-${day+1} Question-${index+1} done!`
    toast(str,{type:"success"});
   }
   else
   {
 
    toast('Marked as Not Done',{type:"warning"});
     let temp = done[day].indexOf(index+1)

      done[day][temp] = -1;
    
   }
   
    const firebasedb = firebase.database().ref();

    firebasedb.child(`done/${uid}`).set(done,(err)=>{
      
    })

     
    setDone(done);
       
  }

  if (context.user == null) {
    return <Redirect to="/signin"></Redirect>;
  } else {
     data = data["QuestionsData"];
     console.log("spiia")
     console.log(done[day])
    return (
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>First</th>
            <th>Last</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index} >
              <td>{index + 1}</td>
              <td>
                <a href={data.link} target="_blank">
                  {data.Problem}
                </a>
              </td>
            

              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => myfunc(data.video)}
                >
                  Video Solution
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog ">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={closingfunc}
                        >
                          <span id="close" aria-hidden="true">&times;</span>
                          <span style={{color:'white'}}>close</span>
                        </button>
                      </div>
                      <div class="modal-body ">
                        <iframe id="video" src="" allow="autoplay" allowfullscreen="allowfullscreen"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                
                <input type="checkbox" id={`${index}`} checked={done[day].indexOf(index+1)==-1?false:true}  onChange={()=>donefunc(context.user?.uid,index)}></input>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default QuestionPage;


