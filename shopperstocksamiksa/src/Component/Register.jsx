import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from "react-hot-toast"

const Register = () => {
    const [userData, setUserData] = useState({name: "",email:"",password: "",ConfirmPassword:"",role:"Buyer"})
    const router = useNavigate ()
    const handleChenge = (event)=>{
    setUserData({... userData,[event.target.name]: event.target.value});
    console.log(userData,"-setUserData")
    }

    function selectRole (event){
      setUserData({...userData,["role"]: event.target.value})
      }



    // const handleSubmit = (event) =>{
    //     event.preventDefault()
    //     if(userData.name && userData.email && userData.password && userData.ConfirmPassword){
    //         const array  =  JSON.parse(localStorage.getItem("User"))|| []
    //         const userDataobj={
    //             name:userData.name,
    //             email:userData.email,
    //             password:userData.password,
    //             cart:[]
    //         };
    //         array.push(userDataobj);
    //         localStorage.setItem('User',JSON.stringify(array))
    //         alert("registration succesfull...")
    //         router('/login')
    //     }else{
    //         alert("plese fill all field")
    //     }
    // }

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (userData.name && userData.email && userData.password && userData.ConfirmPassword && userData.role) {
          if (userData.password === userData.ConfirmPassword) {
              const response = await axios.post("http://localhost:8000/register", { userData });
              if (response.data.success) {
                  setUserData({ name: "", email: "", password: "", confirmpassword: "", role: "Buyer" })
                  router('/login')
                  toast.success(response.data.message)
              } else {
                  toast.error(response.data.message)
              }
  
          } else {
              toast.error("Password and Confirm Password not Matched.")
          }
      } else {
          toast.error("All fields are mandtory.")
      }
  }
  return (
    <div className='first-div-navbar'>
   <div className='image-div'>
  <p>Login/sign/up</p>
   
   </div>
       <div className=' register-div'>
       <h2>Register</h2>
        <form onSubmit={ handleSubmit}>
            <lable>Name</lable><br/>
            <input value={userData.name} type= 'text'name='name' onChange={handleChenge}/><br/>
            <select onChange={selectRole }>
              <lable>Role</lable><br/>
              <option >Buyer</option>
              <option>Seller</option>+
            </select><br/>
            <lable>Email</lable><br/>
            <input value={userData.email} type='email' name='email'onChange={handleChenge}/><br/>
            <lable>Password</lable><br/>
            <input value={userData.password} type='password'name='password' onChange={handleChenge}/><br/>
            <lable>Password</lable><br/>
            <input value={userData.ConfirmPassword} type='password'name='pConfirmPassword' onChange={handleChenge}/><br/>
          <div className='submit'>  <input type='submit' value= 'Register'/></div>

        </form>
        </div>

       <div className='login'>
       <p>Login using <u><b>Email</b></u></p>
         <img src='https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&rs=1&c=1&qlt=95&w=143&h=80'/>
         <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'/>
        </div>
            <div className='sign-up'><p>By signing up you agree to our Terms of <span>Service & Privacy Policy</span></p></div>

     
    </div>
  )
}

export default Register