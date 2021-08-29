import React, { useContext } from "react";
import { userContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import "../Styles/modal.css";
const QuestionPage = ({ data }) => {
  function myfunc(link) {
    console.log(link);

    let url = "" + link;

    url = url.replace(/watch/gi, "embed");
    document.getElementById("video").src = "" + url;
    console.log(document.getElementById("video"));
    // console.log(document.getElementById("video").src);
  }

  function closingfunc() {
    document.getElementById("video").src = "";
  }

  const context = useContext(userContext);
  if (context.user == null) {
    //    toast("Signin First",{type:'info'})
    return <Redirect to="/signin"></Redirect>;
  } else {
    data = data["QuestionsData"];
    return (
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>First</th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <a href={data.link} target="_blank">
                  {data.Problem}
                </a>
              </td>
              {/* <td>
                <a href={data.video} target="_blank">
               
                  Video
                </a>
              </td> */}

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
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body ">
                        <iframe id="video" src="" allow="autoplay"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default QuestionPage;
