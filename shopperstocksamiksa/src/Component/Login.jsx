import React, { useState } from "react";

import { Router, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const router = useNavigate();
  const handlechenge = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const user = JSON.parse(localStorage.getItem("User"));
      var flag = false;
      for (var i = 0; i < user.length; i++) {
        if (
          user[i].email == userData.email &&
          user[i].password == userData.password
        ) {
          flag = true;
          localStorage.setItem("Current-user", JSON.stringify(user));
          alert("login succesfull....");
          setUserData({ email: "", password: "" });
          router("/");
        }

        if (flag == false) {
          return alert("please check credentails.");
          
        }
      }
    } else {
      alert("please fill all field....");
    }
  };
  return (
    <div className="Login">
      
      <div className='image-div'>
  <p>Login/sign/up</p>
   
   </div>
      <div className=' login-div'>
        <form onSubmit={handlesubmit}>
          <label className="label">Email</label>
          <br />
          <input className="input-div" type="email " name="email"  onChange={handlechenge} />
          <br />
          <label className="label">Password</label>
          <br />
          <input className="input-div"  type="Password" name="password"  onChange={handlechenge} />
          <br />
          <input className="submit" type="submit" value="login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
