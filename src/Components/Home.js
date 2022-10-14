import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Icon from "@mui/material/Icon";

function Dashboard({ student }) {
  var newHTML = student.filter(function (el) {
    return el.course === "HTML";
  });
  var newCss = student.filter(function (el) {
    return el.course === "CSS";
  });
  var newJS = student.filter(function (el) {
    return el.course === "JavaScript";
  });

  return (
    <div className="content" style={{background: "#f1f1f1", height:"100vh"}}>
      <h1 style={{textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF"}}>Dashboard</h1>
      <div className="container">
      <div className="home-image">
      <img style={{ width: "70%", padding: 30, display: 'block', alignItems: 'center', justifyContent: 'center', margin:"0 auto"}} src={require('./programming.jpg')} alt="Programming" />
      </div>
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h5 className="m-b-20"> Total Students Enrolled </h5>
                <h2 className="text-right">
                  <Icon className="f-left" fontSize="large">
                    <PeopleAltIcon fontSize="large" />
                  </Icon>
                  <span>{student.length}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
              <div className="card-block">
                <h5 className="m-b-20">Students Enrolled in HTML </h5>
                <h2 className="text-right">
                  <Icon className="f-left" fontSize="large">
                    <CodeIcon fontSize="large" />
                  </Icon>
                  <span>{newHTML.length}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-purple order-card">
              <div className="card-block">
                <h5 className="m-b-20"> Students Enrolled in JavaScript</h5>
                <h2 className="text-right">
                  <Icon className="f-left" fontSize="large">
                    <CodeIcon fontSize="large" />
                  </Icon>
                  <span>{newJS.length}</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h5 className="m-b-20"> Students Enrolled in CSS</h5>
                <h2 className="text-right">
                  <Icon className="f-left" fontSize="large">
                    <CodeIcon fontSize="large" />
                  </Icon>
                  <span>{newCss.length}</span>
                </h2>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
