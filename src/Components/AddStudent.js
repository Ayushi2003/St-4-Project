import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../Styles/addstudent.css";

function AddStudent({ student, setStudent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  return (
    <div className="content" style={{background: "#6ab187", height:"100vh"}}>
      <h1 style={{textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF"}}>Add Student</h1>
      <div className="subject">
        <div className="form-container">
          <h3 style={{textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF"}}>Student Registration Form</h3>
          <TextField
            id="standard-name"
            label="Name"
            
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="standard-email"
            label="Email"
            
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="standard-phone"
            label="Phone"
            
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setPhone(event.target.value)}
          />
          
          <TextField
            id="standard-id"
            label="ID"
            
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setId(event.target.value)}
          />
          <TextField
            id="standard-course"
            label="Course"
           
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setCourse(event.target.value)}
          />
        
          <Button
            variant="outlined"
            onClick={() => {
              const newStudent = {
                name: name,
                email: email,
                phone: phone,
                id: id,
                course: course,
              };
              setStudent([...student, newStudent]);
              navigate("/allStudent");
            }}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
