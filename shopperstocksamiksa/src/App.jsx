import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Navbar from './Component/Navbar';





function App() {

  return (

    <div>
      <Navbar/>
    <Routes>
      <Route exact path='register'element={<Register/>}/>
      <Route exact path='login'element={<Login/>}/>
      <Route exact path='/'element={<Home/>}/>
    </Routes>
   

      
    
     
    </div>
  
    

  );
}

export default App;
