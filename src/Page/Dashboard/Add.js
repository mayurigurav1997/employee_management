import React, { useState , useRef, useEffect} from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  // when first mount this component first input field is highlight
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  },[]);

  const handleAdd = e => {
    //stop refreshing the page
    e.preventDefault();
    if(!firstName || !lastName || !email || !salary || !date){
      return Swal.fire({
        icon:"error",
        title:"Error",
        text:"All fields are required",
        showConfirmButton:true
      })
    }

    const id = employees.length + 1;
    const newEmpployee = {
      id:id,
      firstName:firstName,
      lastName:lastName,
      email:email,
      salary:salary,
      date:date
    } 
    employees.push(newEmpployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon:"success",
      title:"Added",
      text:`${firstName} ${lastName}'s data has been added.`,
      showConfirmButton:false,
      timer:1500
    })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" ref={textInput} name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />

        <label htmlFor="salary">Salary</label>
        <input id="salary" type="number" name="salary" value={salary} onChange={e => setSalary(e.target.value)} />

        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />

        <div style={{ marginTop:"30px"}}>
          <input type="submit" value="add" />

          <input type="button" style={{ marginLeft: "12px" }} className="muted-button" value="Cancel" onClick={() => setIsAdding(false)} />
        </div>
      </form>
    </div>
  )
}

export default Add