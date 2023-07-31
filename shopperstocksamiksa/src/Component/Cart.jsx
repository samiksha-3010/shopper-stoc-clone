import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [userCart, setUserCart] = useState([]);
  console.log(userCart, '-userCar')
  useEffect(()=>{
   
   const user = JSON.parse(localStorage.getItem("Current-user"))
   if(user?.email){
   const alluser = JSON.parse( localStorage.getItem ("User"))
   for(var i = 0; i < user.length; i++){
    if(alluser[i].email == user.email && alluser[i]. password == user.password){
      setUserCart(alluser[i].cart);
      break;
     
    }
   }
  }else{
    alert ("please login and watch all product")
  }
  },[])

  function buyproduct(){
    const user = JSON.parse(localStorage.getItem("Current-user"))
    if(user?.email){
      const alluser = JSON.parse(localStorage.getItem("User"))
      for(var i = 0;i < user.length; i++){
        if(alluser[i].email == user.email && alluser[i] .password == user.password){
          setUserCart(alluser[i].cart);
          break;
        }
      }
      localStorage.setItem("user",JSON.stringify(alluser))
    }
  }
  return (
    <div>
   <h2 style={{marginTop: "100px"}}>my Cart</h2>
   <div>
    {userCart.length && userCart.map ((pro)=>(
       <div>
        <img src={pro.image}/>
        <h2>Tittle:{pro.title}</h2>
        <h3>price:{pro.name}</h3>
       </div>
    ))}
   </div>

   <div>
    <h1>Total</h1>
    <p>Total MRP</p>
    <p>Price After 50% discount</p>
    <button onClick={buyproduct}>Buy Product</button>
   </div>

    </div>
  )
}

export default Cart;