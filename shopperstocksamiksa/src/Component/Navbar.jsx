import React from 'react'
import './Navbar.css'

const Navbar = () => {

  const router = useNavigate()
  function togo() {
      router('/Register')
  return (
    <div className='navbar'>
        <div className='store-txt'>
            <p> CATEGORIES</p>
            <span> LUXE </span>
            <p> BARGAINS</p>

        </div>
        <div className='shooper-stop' >
            <p>SHOOPER STOP</p>
        </div>
        <div className='serch-box'>
        <input type='search' placeholder='search product & brands'/>
        <i class="fa-solid fa-magnifying-glass fa-xl"></i>
        </div>
        <div className='font-icon'>
        <i class="fa-solid fa-heart fa-xl"></i> 
               <i class="fa-solid fa-user fa-xl"></i>
        <i class="fa-solid fa-bag-shopping fa-xl"></i>
        </div>

    </div>
  )
}

export default Navbar