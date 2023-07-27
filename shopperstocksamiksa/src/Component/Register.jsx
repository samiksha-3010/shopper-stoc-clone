// import React, { useState } from 'react'
// import './Register.css'
// import { useNavigate } from 'react-router-dom'

// const Register = () => {
//     const [userData, setUserData] = useState({name: "",email:"",password: ""})
//     const router = useNavigate ()
//     const handleChenge = (event)=>{
//     setUserData({... userData,[event.target.name]: event.target.value});
//     console.log(userData,"-setUserData")
//     }

//     const handleSubmit = (event) =>{
//         event.preventDefault()
//         if(userData.name && userData.email && userData.password){
//             const array  =  JSON.parse(localStorage.getItem("User"))|| []
//             const userDataobj={
//                 name:userData.name,
//                 email:userData.email,
//                 password:userData.password
//             };
//             array.push(userDataobj);
//             localStorage.setItem('User',JSON.stringify(array))
//             alert("registration succesfull...")
//             router('/login')
//         }else{
//             alert("plese fill all field")
//         }

//     }


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    // console.log(userData, "- userdata")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {

            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const userDataObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                cart : []
            };
            // console.log(array, "-array")
            array.push(userDataObj);
            // console.log(array, "-array after push")
            localStorage.setItem("Users", JSON.stringify(array)); /// set, not update

            // const ls = JSON.parse(localStorage.getItem("Test")) || [];
            // // console.log(ls, "-ls")
            // ls.push(userData);

            // console.log(ls, "- updated ls") // 2



            // localStorage.setItem("Test", JSON.stringify(ls))


            alert("Registeration Successfull..")
            router('/login')
        } else {
            alert("Please fill the all fields..")
        }
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' name='name' onChange={handleChange} /><br />
                <label>Email</label><br />
                <input type='email' name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type='password' name='password' onChange={handleChange} /><br />
                <input type='submit' value='Register' /><br />
            </form>
        </div>
    )
}

export default Register
  
//   return (
//     <div className='first-div'>
//    <div className='image-div'>
//     {/* <h2>Login/Sigh.in</h2> */}
   
//    </div>
//        <div className=' register-div'>
//        <h2>Register</h2>
//         <form onSubmit={ handleSubmit}>
//             <lable>Name</lable><br/>
//             <input type= 'text'name='name' onChange={handleChenge}/><br/>
//             <lable>Email</lable><br/>
//             <input type='email' name='email'onChange={handleChenge}/><br/>
//             <lable>Password</lable><br/>
//             <input type='password'name='password' onChange={handleChenge}/><br/>
//           <div className='submit'>  <input type='submit' value= 'Register'/></div>

//         </form>
//         </div>

//        <div className='login'>
//        <p>Login using <u><b>Email</b></u></p>
//          <img src='https://tse1.mm.bing.net/th?id=OIP.AfKMLf4rKX7EqOSAVpujIQHaEK&pid=Api&rs=1&c=1&qlt=95&w=143&h=80'/>
//          <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'/>
//         </div>
//             <div className='sign-up'><p>By signing up you agree to our Terms of <span>Service & Privacy Policy</span></p></div>

     
//     </div>
//   )
// }

// export default Register