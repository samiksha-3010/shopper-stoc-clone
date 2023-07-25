import React, { useState } from 'react'
import { Router, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const [userData, setUserData] = useState ({email:"",password:""});
   const router = useNavigate ();
  const handlechenge = (event) =>{
    setUserData({...userData,[event.target.name]: event.target.value})

  }
  const handlesubmit=(event)=>{
    event.preventDefault();
  if(userData.email && userData.password){
    const user = JSON.parse(localStorage.getItem("User"));
   var flag = false
  for(var i = 0; i <user.length; i++){
    if( user[i].email == userData.email && user[i].password == userData.password){
      flag = true
      alert("login succesfull....")
      setUserData({email: "",password: ""})
    
      router ('/')
      break;
  }
  }
    if (flag == false) {
       return alert("please check credentails.")
    }
  }else{
      alert("please fill all field....")
    }
  }
    
  return (
    <div className='Login'>
      <h2>Login</h2>
      <div className='login-page'>
      <form onSubmit={handlesubmit}> 
        <label>Email</label><br/>
        <input type='email ' name='email'onChange={handlechenge}/><br/>
        <label>Password</label><br/>
        <input type='Password' name='Password'onChange={handlechenge}/><br/>
        <input type='submit' value= 'login'/>


      </form>
      </div>
    
    </div>
  )
}

export default Login;