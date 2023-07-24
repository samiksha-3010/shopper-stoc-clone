import React, { useState } from 'react'
import './Register.css'

const Register = () => {
    const [userData, setUserData] = useState({name: "",email:"",password: ""})

    const handleChenge = (event)=>{
    setUserData({... userData,[event.target.name]: event.target.value});
    console.log(userData,"-setUserData")
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(userData.name && userData.email && userData.password){
            const array  =  JSON.parse(localStorage.getItem("User"))|| []
            const userDataobj={
                name:userData.name,
                email:userData.email,
                password:userData.password
            };
            array.push(userDataobj);
            localStorage.setItem('User',JSON.stringify(array))
            alert("registration succesfull...")
        }else{
            alert("plese fill all field")
        }

    }
  

 


  
  return (
    <div className='first-div'>
   <div className='image-div'>
    {/* <h2>Login/Sigh.in</h2> */}
   
   </div>
       <div className=' register-div'>
       <h2>Register</h2>
        <form  onSubmit={ handleSubmit}>
            <lable>Name</lable><br/>
            <input type= 'text'name='name' onChange={handleChenge}/><br/>
            <lable>Email</lable><br/>
            <input type='email' name='email'onChange={handleChenge}/><br/>
            <lable>Password</lable><br/>
            <input type='password'name='password' onChange={handleChenge}/>
            <input type='submit' value= 'Register'/>
        </form>
       </div>
    </div>
  )
}

export default Register