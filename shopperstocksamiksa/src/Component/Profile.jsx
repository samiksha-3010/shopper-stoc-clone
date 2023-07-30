import React from 'react'

const Profile = () => {
  return (
    <div style={{border: '1px solid black',width: '30%',height:'200px',backgroundColor: 'black'}}>
        <h2> My Profile</h2>
        <label style={{fontSize:'25px' ,color: 'white'}}>Name: Samiksha </label><br/>
        <label style={{fontSize:'25px' ,color: 'white'}}>Email:Sami@gmail.com</label><br/>
        <button style={{width: '40%',height:'50px',marginTop:'30px'}}>Edit Profile</button>

    </div>
  )
  }
export default Profile