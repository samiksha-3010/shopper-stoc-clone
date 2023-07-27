// import React, { useEffect, useState } from 'react'
// import './Multiple.css'

// const MultipleProduct = () => {
//   const [product, setProduct] = useState([]);
//   useEffect (() =>{
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
         
//   },[])
//   return (
//     <div className='parent-div'>
//       <h2>MultipleProduct</h2>
//       <div>
//       {MultipleProduct.map((pro) =>(
//         <div>
//            <img src={pro.image} />
//               <h4 >Name : {pro.title}</h4 >
//                 <h3 >Price : {pro.price}Rs.</h3>
//           </div>
//       ))}
//       </div>
//     </div>
//   )
// }

// export default MultipleProduct;





import React,{useEffect, useState} from 'react'
import './MultipleProduct.css'
import { useNavigate } from 'react-router-dom';

const MultipleProduct = ()=> {
    const [products, setProducts] = useState([]);
    // console.log(products, "-product")
    const router = useNavigate();

    useEffect (() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json=>setProducts (json))
        // .then (json => console.log(json))            

    },[])
    const redirect = (id) =>{
        console.log(id,"-id")
     
        router (`/product/${id}`)
        // router( "./singleproduct/id")
    }
    
  return (
   

    <div className='parent-div'>
<div className='Filter' >
  <div className='filter-div'>
    <div className='box'>
      <h4>CATEGORIES</h4>
      <i class="fa-solid fa-chevron-down"></i>
    </div>

    <div className='txt'>
    <i class="fa-solid fa-chevron-down"></i>
     <b>ACCESSORIES (39)</b>
    </div>
    <div className='txt'>
    <i class="fa-solid fa-chevron-down"></i>
     <b>INNERWEAR  (39)</b>
    </div>
    <div className='txt'>
    <i class="fa-solid fa-chevron-down"></i>
     <b>JACKETS  (1) (39)</b>
    </div>
    <div className='txt'>
    <i class="fa-solid fa-chevron-down"></i>
     <b>shoes(39)</b>
    </div>
  


    

  </div>
</div>
        {/* <h2>Multiple product</h2> */}
    { products.length ?
         <div className='parent-second'> 
          { products.map((pro) =>(
          
              <div onClick={ ()=> redirect (pro.id)}  style={{  cursor: 'pointer', width: "18%", border: "2px solid black", height: '450px', marginBottom: "30px" }}>
              <img style={{ width: "80%", height: "260px", marginLeft: "10%", marginTop: "25px" }} src={pro.image} />
              <h4 style={{ marginLeft: "20px" , color: 'red' }} >Name : {pro.title}</h4 >
              <h3 style={{ marginLeft: "20px" , color: 'red'}}>Price : {pro.price}Rs.</h3>
          </div>

          ) )}
            </div>
            :
            <h1 style={{ width: "15%", margin: 'auto' }}>Loading.</h1>
            }

</div>     

  )
        }

export default MultipleProduct;