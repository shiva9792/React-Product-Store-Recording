
import {Switch,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import react from 'react';
import Navbar from "./Componant/Navbar";
import Cart from "./Componant/Cart";
import Detailes from "./Componant/Detailes";
import ProductList from "./Componant/ProductList";
import Defaults from "./Componant/Default";
import Modal from "./Componant/Modal";


function App() {
  return (
    
    <react.Fragment>
         <Navbar></Navbar>
         <Switch>      
           <Route exact path="/" component={ProductList}></Route>
           <Route path="/detailes" component={Detailes}></Route>
           <Route path="/cart" component={Cart}></Route>  
           <Route component={Defaults}></Route>
         </Switch>  
         <Modal></Modal>
    </react.Fragment> 
  );
} 



export default App;
