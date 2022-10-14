import React, { useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/addstudent.css";

function EditStudent({ student, setStudent }) {
  const { index } = useParams();
  const selectedStudent = student[index];
  const [name, setName] = useState(selectedStudent.name);
  const [email, setEmail] = useState(selectedStudent.email);
  const [phone, setPhone] = useState(selectedStudent.phone);
  const [id, setId] = useState(selectedStudent.id);
  const [course, setCourse] = useState(selectedStudent.course);
  const navigate = useNavigate();
  
  let handleEdit = () => {
    let newData = { name, email, phone: phone, id: id, course: course };
    let newArray = [...student];
    newArray.splice(index, 1, newData);
    setStudent(newArray);
    navigate("/allStudent");
    console.log(newData);
  };

  return (
    <div className="content">
      <h1 style={{textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF"}}>Edit Student</h1>
      <div className="subject">
        <FormControl className="form-container">
          <h3>Student Registration Form</h3>
          <TextField id="standard-name" label="Name"  required value={name} sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }} onChange={(event) => setName(event.target.value)}/>
          <TextField
            id="standard-email"
            label="Email"
            
            required
            value={email}
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="standard-phone"
            label="Phone"
           
            required
            defaultValue={selectedStudent.phone}
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            onChange={(event) => setPhone(event.target.value)}
          />
          
          <TextField id="standard-id" label="ID" defaultValue={selectedStudent.id}  required sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }} onChange={(event) => setId(event.target.value)}/>
          <TextField id="standard-course" label="Course" defaultValue={selectedStudent.course} required sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }} onChange={(event) => setCourse(event.target.value)}/>
          <Button variant="outlined" onClick={handleEdit}>Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default EditStudent;
