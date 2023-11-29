import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import MultipleProduct from './Component/MultipleProduct';
import SingleProduct from './Component/SingleProduct';
import Profile from './Component/Profile';
import Cart from './Component/Cart';
import Allproducts from './Component/Comman/Allproducts';
import AddProduct from './Component/Buyer/AddProduct';
import YourProducts from './Component/Buyer/YourProducts';
 
function App() {

  return (

    <div>
      <Navbar/>
    <Routes>
      <Route exact path='/singleproduct/:id'element={<SingleProduct/>}/>
      <Route exact path='/multipleproduct'element={<MultipleProduct/>}/>
      <Route exact path='/register'element={<Register/>}/>
      <Route exact path='/login'element={<Login/>}/>
      <Route exact path='/'element={<Home/>}/>
      <Route exact path='/cart'element={<Cart/>}/>
      <Route exact path='/profile'element={<Profile/>}/>
      <Route exact path='/all-products' element={<Allproducts/>}/> 
      <Route exact path='/add-product' element={<AddProduct/>} />
      <Route exact path='/your-product' element={<YourProducts/>}/>

    </Routes>
    <Footer/>
   

      
    
     
    </div>
  
    

  );
}

export default App;
