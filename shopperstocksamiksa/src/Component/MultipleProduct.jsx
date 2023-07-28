
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
     
        router (`/singleproduct/${id}`)
       
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
      <div className='left'>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      </div>
     <div className='right'>
     <b>ACCESSORIES (39)</b>
     <b>INNERWEAR  (39)</b>
     <b>JACKETS  (1) (39)</b>
     <b>shoes(39)</b>
     </div>

    </div>
   
    <div className='box'>
      <h4>SUB-CATEGORIES</h4>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <div className='txt'>
      <div className='left'>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      </div>
     <div className='right'>
     <b> BOXERS  (12) (39)</b>
     <b>BRIEFS & TRUNKS </b>
     <b>CASUAL SHIRTS  (15)</b>
     <b>FORMAL SHIRTS  (189)</b>
     </div>

    </div>


    <div className='box'>
      <h4>Offers</h4>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <div className='txt'>
      <div className='left'>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      </div>
     <div className='right'>
     <b>FLAT 70% OFF  (122)</b>
     <b>FLAT 50% OFF  (198) </b>
     <b>FLAT 30% OFF  (1)</b>
     <b>FLAT RS. 699/-  (151)</b>
     <b>FLAT 70% OFF  (83)</b>
     <b>FLAT RS.499/-  (118)</b>
     </div>

    </div>
    <div className='box'>
      <h4>Size</h4>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <div className='txt'>
      <div className='left'>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      <i class="fa-solid fa-chevron-down"></i><br/>
      </div>
     <div className='right'>
     <b>28  (5)</b>
     <b>30  (97)</b>
     <b>34  (88)</b>
     <b>36  (73)</b>
     <b>36  (73)</b>
     <b>36  (73)</b>
     </div>

    </div>
    
    <div className='colour-div'>
      <div></div>

    </div>
  </div>
</div>
      
    { products.length ?
         <div className='parent-second'> 
          { products.map((pro) =>(
          
              <div onClick={()=> redirect (pro.id)}  style={{  cursor: 'pointer', width: "18%", border: "2px solid black", height: '450px', marginBottom: "30px" }}>
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