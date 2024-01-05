
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
        // console.log(id,"-id")
     
        router (`/singleproduct/${id}`)
       
    }

    document.addEventListener("DOMContentLoaded", function () {
      // Simulate content loading delay (you can replace this with your actual loading logic)
      setTimeout(function () {
          // Hide the loader when the content is loaded
          document.querySelector('.loader-container').classList.add('loaded');
      }, 2000); // Adjust the delay as needed
  });
    
  return (
   

    <div className='parent-div'>
<div className='Filter' >
<div id="one">
        <p>All in Clothing</p>
        <p>110919+ Products</p>
      </div>
      <div id="two">
        <div>
          <span>Sort by:</span>
          <span>
            <select>
              <option>Popularity</option>
              <option>Price High to Low</option>
              <option>Price low to High</option>
              <option>New Arrivals</option>
              <option>Discounts</option>
            </select>
            <i class="fa-solid fa-arrow-down-wide-short"></i>
          </span>
        </div>
        <span>
          <img src="https://www.tatacliq.com/src/plp/components/img/list.svg" />
        </span>
      </div>
      <div id="body">
        <div id="left">
          <div>
            <div>
              <h4>CATEGORIES</h4>
              <input type="checkbox" />
              <lable>Tshirts</lable>
              <span className="textcolor">(93124)</span>
              <br />
              <input type="checkbox" />
              <lable>Lounge Tshirts</lable>
              <span className="textcolor">(93124)</span>
            </div>
            <div>
              <h4>BRAND</h4>
              <input type="checkbox" />
              <lable>Rodsters</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>Friskers</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>Tommy Hilfiger</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>U.S. Polo Assn.</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>HRX by Hrithik Roshan</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>Jack & Jones</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>WROGN</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <input type="checkbox" />
              <lable>Puma</lable>
              <span className="textcolor">(3124)</span>
              <br />
              <lable className="pink">+ 624 more</lable>
            </div>
            <div>
              <h4>PRICE</h4>
              <input type="checkbox" />
              <lable>Rs.134 to Rs. 1403</lable>
              <span className="textcolor">(9164)</span>
              <br />
              <input type="checkbox" />
              <lable>Rs. 1403 to Rs. 2719</lable>
              <span className="textcolor">(9164)</span>
              <br />
              <input type="checkbox" />
              <lable>Rs. 2719 to Rs. 4035</lable>
              <span className="textcolor">(9164)</span>
              <br />
              <input type="checkbox" />
              <lable>Rs. 4035 to Rs. 5351</lable>
              <span className="textcolor">(9164)</span>
              <br />
            </div>
            <div>
              <div>
                <h4>COLOR</h4>
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="b"></p>
                <lable>Black</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="bl"></p>
                <lable>Blue</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="w"></p>
                <lable>White</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="nb"></p>
                <lable>Navy Blue</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="g"></p>
                <lable>Green</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="gy"></p>
                <lable>Grey</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <div>
                <input type="checkbox" />
                <p className="bgcl" id="r"></p>
                <lable>Red</lable>
                <p className="textcolor">(124)</p>
                <br />
              </div>
              <lable className="pink">+ 39 more</lable>
            </div>
            <div>
              <h4>DISCOUNT RANGE</h4>
              <input type="checkbox" />
              <lable>10% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>20% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>30% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>40% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>50% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>60% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>70% and above</lable>
              <span className="textcolor">(764)</span>
              <br />
              <input type="checkbox" />
              <lable>80% and above</lable>
              <span className="textcolor">(764)</span>
            </div>
          </div>
        </div>
        <div/>
        </div>
</div>


      
    { products.length ?
         <div className='parent-second'> 
          { products.map((pro) =>(
          
              <div onClick={()=> redirect (pro.id)}  style={{ backgroundColor:"white", cursor: 'pointer', width: "18%", border: "1px solid gray", height: '450px', marginBottom: "30px" }}>
              <img style={{  width: "80%", height: "260px", marginLeft: "10%", marginTop: "25px" }} src={pro.image} />
              <h4 style={{ marginLeft: "20px" , color: 'red' }} >Name : {pro.title}</h4 >
              <h3 style={{ marginLeft: "20px" , color: 'red'}}>Price : {pro.price}Rs.</h3>
          </div>

          

          ) )}
            </div>
            :

            <div class="loader-container">
            <div class="loader">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>

        
            // <h1 style={{ width: "15%", margin: 'auto' }}>Loading.</h1>
            }

</div>   





  )
        }

export default MultipleProduct;