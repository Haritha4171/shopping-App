import React, { useState} from "react";
import {useNavigate} from "react-router-dom"
import "./flipkart.css"


function App(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[cpass,setCpass]=useState("")

    const navigate=useNavigate()


   const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePass=(e)=>{
        setPass(e.target.value)
    }
    const changeCpass=(e)=>{
        setCpass(e.target.value)
    }

 const handleChange=(event)=>{
    event.preventDefault()
    if(name.length<=5){
        alert("must be enter more than 5 charcters")
    }
    else if(pass.length<=8){
        alert("password must be more than 8 characters")
    }
    else if(pass!==cpass){
        alert("password does not match")
    }
    else{
        alert("sucuessfully submited")
        localStorage.setItem("Name",name)
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",pass)
   
    }

  } 
  const login=()=>{
    if(name===localStorage.getItem("Name") && pass===localStorage.getItem("Password") && email===localStorage.getItem("Email")) {
      
        alert("success")
        navigate("/app1")

    }
    else{
        alert("check ur credientails")
    } 
}
//     // const HandleChange=()=>{
//     //     navigate("./app1.js")
//     //  }
    return(
        <div>
            <div class="container-fluid">
           
            <form>
  
            <h1 class="display-3">Registration</h1>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">UserName:</label><br/>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="enter your name" value={name} onChange={changeName}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Email:</label><br/>
      <input type="email" id="disabledTextInput" class="form-control" placeholder="****" value={email} onChange={changeEmail}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Password:</label><br/>
      <input type="password" id="disabledTextInput" class="form-control" placeholder="****" value={pass} onChange={changePass}/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">confirm password:</label>
      <input type="password" id="disabledTextInput" class="form-control" placeholder="****" value={cpass} onChange={changeCpass}/>
    </div>
    
    <button type="submit" class="btn btn-primary" onClick={handleChange}>SignUp</button>

</form>
</div>
<br/><br/><br/>
<div class="container-fluid">
          
            <form onSubmit={login}>
  
            <h1 class="display-3">Login</h1>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">UserName:</label><br/>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="enter your name"/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Email:</label><br/>
      <input type="email" id="disabledTextInput" class="form-control" placeholder="****"/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Password:</label><br/>
      <input type="password" id="disabledTextInput" class="form-control" placeholder="****"/>
    </div>
    <button type="submit" class="btn btn-primary">SignIn</button>

</form>

</div>




</div>
    )
}

export default App;