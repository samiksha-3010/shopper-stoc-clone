import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import {  useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SingleProduct = () => {
  
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [products,SetProducts] = useState([]);
  const [SingleProduct,setsingleproduct] = useState({})
  const { id } = useParams();
  const router =(useNavigate)();
  // console.log(products,"-setproducts")
  useEffect (() =>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json=>SetProducts (json))
    // .then (json => console.log(json))            

  },[])
  useEffect(() =>{
    if(id && products.length){
      const result= products.find((products) => products.id == id  )
      // console.log(result, "-result")
      setsingleproduct(result)
    }
  },[id,products])
  
  // console.log(singleproduct,"-setsingleproduct")

  useEffect(()=>{
    var user = JSON.parse(localStorage.getItem("Current-user"));
    // console.log(user,"usr")
    if(user){
      setIsUserLoggedIn(true);
      setCurrentUserEmail(user.email)
    }
  },[])
  
    function addCart(){

      if(setIsUserLoggedIn){
        const user = JSON.parse(localStorage.getItem("User"))
        for(var i=0; i < user.length; i++ ){
          user[i].cart.push(SingleProduct);
          localStorage.setItem("User",JSON.stringify(user));
          break;
        
      }
      alert("Product add to sucessfully cart...")
    } else {
      alert ("you can not add product before login")
    }
}
  return (
    <div className='first-div' key={id}>
    <div className='second-div'>
      <img src={SingleProduct.image}/>
    </div>
    <div className='third-div'>
    <h1>Name :{SingleProduct.title}</h1>
     <h2>Price : {SingleProduct.price}</h2>
    F
     <div className='four-div'>
     <p>Find your perfect match! <u><b>Ask your Expert Advisor</b></u></p>
     <b>Size</b>
     <p>Size ( 5+ Available )</p>
     <div></div>
     <button onClick={addCart}>Add to cart</button>
     {/* <button>Add to cart</button> */}
     </div>
     <div className='div'>7 days easy return and exchange applicable for this item</div>
   
     <div className='five-div'>
      <h2>Product Details</h2>
      <h4>Product Description</h4>
      <p>This pair of solid cotton pillow cover range is crafted from beautifully soft 100% brushed cotton, which is absolute heaven. They are soft and of high... <b>View More</b> </p>
     
     </div>
     <div className=' devided'>
      <div >
        <span>Fabric</span><br/>
        <span>Cotton</span><br/>
        <span>Qulityc</span><br/>
        <span>gender</span><br/>
        <span>Size</span><br/>
        <span>Patrren</span><br/>
      </div>
      <div>
      <span>Solid</span><br/>
        <span>Cotton</span><br/>
        <span>45cm</span><br/>
        <span>Men</span><br/>
        <span>xxl</span><br/>
        <span>Cotton</span><br/>
      </div>
     </div>
     <div className='six-div'>
      <b>1 Offer</b>
      <span>FLAT 40% OFF</span>
      <p>Buy Any 1 Or More Of Homestop And Get 40% Off</p>
      <b>Style Note</b><br/>
      <b>About Brand</b>
     </div>
     
    </div>
      
       </div>
  )
}

export default SingleProduct

