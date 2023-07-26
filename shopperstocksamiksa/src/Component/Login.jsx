// import React, { useState } from 'react'
// import { Router, useNavigate } from 'react-router-dom';
// import './Login.css'
// const Login = () => {
//   const [userData, setUserData] = useState ({email:"",password:""});
//    const router = useNavigate ();
//   const handlechenge = (event) =>{
//     setUserData({...userData,[event.target.name]: event.target.value})

//   }
//   const handlesubmit=(event)=>{
//     event.preventDefault();
//   if(userData.email && userData.password){
//     const user = JSON.parse(localStorage.getItem("User"));
//    var flag = false
//   for(var i = 0; i <user.length; i++){
//     if( user[i].email == userData.email && user[i].password == userData.password){
//       flag = true 
//   }
//   }
//     if (flag == false) {
//        return alert("please check credentails.")
//     }
//     alert("login succesfull....")
//      setUserData({email: "",password: ""})
//        router ('/')
//   }else{
//       alert("please fill all field....")
//     }
//   }

    
//   return (
//     <div className='Login'>
//       <h2>Login</h2>
//       <div className='login-page'>
//       <form onSubmit={handlesubmit}> 
//         <label>Email</label><br/>
//         <input type='email ' name='email'onChange={handlechenge}/><br/>
//         <label>Password</label><br/>
//         <input type='Password' name='Password'onChange={handlechenge}/><br/>
//         <input type='submit' value= 'login'/>


//       </form>
//       </div>
    
//     </div>
//   )
// }

// export default Login;





import React, { useState } from 'react'
const Login = () => {
  const [userData,setUserData] = useState({email:"", password: ""})
  const handlechenge = (event) =>{
    setUserData({...useState,[event.target.name]: event.target.value})
  }
  const handlesubmit =(event)=>{
    event.preventDefault();
    if(userData.email && userData.password){
      const user = JSON.parse (localStorage.getItem("user"))
      var flag = false
      for(var i=0;i <user.length;i++){
      if(  user[i].email == userData.email && user [i]. password == userData.password ){
        flag = true
        alert ("login sussesfull...")
        setUserData({email: "",password: ""})
      }
      } 
      if (flag == false){
        return alert ("plese chek cerdedentails")
      }
    
    }else {
      alert ("plese fill all field")
   
  }
}
 
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handlesubmit}>
        <label>Email</label><br/>
        <input type='name' name='email'onChange={handlechenge} /><br/>
        <label>Password</label><br/>
        <input type='password' name='password'onChange={handlechenge} /><br/>
        <input  type='submit'value='login'/>
      </form>
    </div>
  )
}

export default Login