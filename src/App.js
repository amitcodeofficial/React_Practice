import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [Employee, setEmployee] = useState({email:'',password:''});
  const [display, setDisplay] = useState("divD");

  const eventHandler = (e) => {
    setEmployee({ ...Employee, [e.target.name]: e.target.value });
  }

  const submitBtn = () => {
    let div = document.getElementById("demo");
    div.style.display="block";
    setTimeout(() => {div.style.display="none"}, 4000);
    // setDisplay("divD2");
    // setTimeout(() => {
    //   setDisplay("divD");
    // }, 4000);
  }

  return (
    <div>
      <p><input type="email" placeHolder="Email" onChange={(e) => eventHandler(e)} name="email"/></p>
      <p><input type="password" placeHolder="Password" onChange={(e) => eventHandler(e)} name="password"/></p>
      <p><button onClick={submitBtn}>Submit</button></p>
      <div id="demo" className={display} >
      <p>{Employee.email}</p>
      <p>{Employee.password}</p>
      </div>
    </div>
  );
}
