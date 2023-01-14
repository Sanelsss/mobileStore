import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import CartContainer from "./components/CartContainer";
import SinglePhone from "./components/SinglePhone";
import Cart from './components/cart/Cart';
import Add from "./components/Add";
//import { useGlobalContext } from './components/context'
//import "bootstrap/dist/css/bootstrap.min.css";
//import SinglePhone from "./components/SinglePhone";
//import Particles from 'react-particles-js';

function App() {

  return (
    <React.Fragment>
      <Router>           
      <Navbar/>
      <Switch>
      <Route exact path="/">
      <CartContainer />
         </Route>
         <Route  path="/cart">
         <Cart />
         </Route>
         <Route  path="/add">
         <Add />
         </Route>
         <Route path="/:id">
         <SinglePhone />
         </Route>
      </Switch>
    </Router>
    </React.Fragment>
  );
}

/* <Route path="/:id"> */
export default App;

