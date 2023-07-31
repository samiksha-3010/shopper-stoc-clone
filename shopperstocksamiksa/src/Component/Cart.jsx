// import React, { useEffect, useState } from 'react'

// const Cart = () => {
//   const [userCart, setUserCart] = useState([]);
//   console.log(userCart, '-userCar')
//   useEffect(()=>{
   
//    const user = JSON.parse(localStorage.getItem("Current-user"))
//    if(user?.email){
//    const alluser = JSON.parse( localStorage.getItem ("User"))
//    for(var i = 0; i < user.length; i++){
//     if(alluser[i].email == user.email && alluser[i]. password == user.password){
//       setUserCart(alluser[i].cart);
//       break;
     
//     }
//    }
//   }else{
//     alert ("please login and watch all product")
//   }
//   },[])

//   function buyproduct(){
//     const user = JSON.parse(localStorage.getItem("Current-user"))
//     if(user?.email){
//       const alluser = JSON.parse(localStorage.getItem("User"))
//       for(var i = 0;i < user.length; i++){
//         if(alluser[i].email == user.email && alluser[i] .password == user.password){
//           setUserCart(alluser[i].cart);
//           break;
//         }
//       }
//       localStorage.setItem("user",JSON.stringify(alluser))
//     }
//   }
//   return (
//     <div>
//    <h2 style={{marginTop: "100px"}}>my Cart</h2>
//    <div>
//     {userCart.length && userCart.map ((pro)=>(
//        <div>
//         <img src={pro.image}/>
//         <h2>Tittle:{pro.title}</h2>
//         <h3>price:{pro.name}</h3>
//        </div>
//     ))}
//    </div>

//    <div>
//     <h1>Total</h1>
//     <p>Total MRP</p>
//     <p>Price After 50% discount</p>
//     <button onClick={buyproduct}>Buy Product</button>
//    </div>

//     </div>
//   )
// }

// export default Cart;





import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [userCart, setUserCart] = useState([]);


    console.log(userCart, "- userCart")


    useEffect(() => {
        if (userCart.length) {
            var totalPrice = 0;
            for (var i = 0; i < userCart.length; i++) {
                totalPrice += userCart[i].price
            }
            setFinalPrice(totalPrice)
        }
    }, [userCart])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    setUserCart(allUsers[i].cart)
                    break;
                }
            }
        } else {
            alert("Please login to watch all cart products.");
         
        }
    }, [])

    function buyProducts() {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];
                    break;
                }
            }
            localStorage.setItem("Users", JSON.stringify(allUsers))
        }
        setFinalPrice(0)
        setUserCart([]);
        alert("Product will deliver soon, Thank you for shopping.")
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h1>Cart</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: "65%", border: "2px solid black" }}>
                    {userCart && userCart.map((pro) => (
                        <div style={{ width: "22%", height: "700px", border: "2px solid black", padding: "30px" }}>
                            <img style={{ width: "100%", height: "500px" }} src={pro.image} />
                            <h3>Title : {pro.title}</h3>
                            <h4>Price : {pro.price}</h4>
                        </div>
                    ))}
                </div>
                <div style={{ width: "25%", border: "2px solid black" }}>
                    <h1>Total </h1>
                    <p>Total MRP : {finalPrice + finalPrice} $ </p>
                    <p>Price after 50% Discount : {finalPrice} $ </p>
                    <button onClick={buyProducts} style={{ width: "150px", height: "40px", backgroundColor: "red", color: "white" }}>Buy Products</button>
                </div>
            </div>
        </div >
    )
}

export default Cart