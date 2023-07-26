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


      


function App() {

  return (

    <div>
      <Navbar/>
    <Routes>
      <Route exact path='singleproduct'element={<SingleProduct/>}/>
      <Route exact path='multipleproduct'element={<MultipleProduct/>}/>
      <Route exact path='/register'element={<Register/>}/>
      <Route exact path='/login'element={<Login/>}/>
      <Route exact path='/'element={<Home/>}/>
    </Routes>
    {/* <Footer/> */}
   

      
    
     
    </div>
  
    

  );
}

export default App;
