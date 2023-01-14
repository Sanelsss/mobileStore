import React,{useState,useEffect} from 'react'
import { useGlobalContext } from './context'
import { FaCartPlus,FaSignInAlt,FaSignOutAlt} from "react-icons/fa";
import { AiFillHome} from "react-icons/ai";
import { GiHamburgerMenu} from "react-icons/gi";
import {  Link } from 'react-router-dom'
import Particles from 'react-particles-js';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

/* import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 import {Navbar, Nav, NavDropdown,Container,Form,FormControl,Button} from "react-bootstrap";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
 */
import { AiOutlineHome,AiFillFolderAdd} from "react-icons/ai";

firebase.initializeApp({
  apiKey: "AIzaSyDEf0Cdt3AufllzCxMxBGMY3BhBR9vYlOI",
  authDomain: "storepet-5ece3.firebaseapp.com",
  projectId: "storepet-5ece3",
  storageBucket: "storepet-5ece3.appspot.com",
  messagingSenderId: "182765775821",
  appId: "1:182765775821:web:9e16d51f6974fa1dbd7284" 
})
 const auth = firebase.auth();


export default function SinglePhone() {
  const [user,setUser]=useState(()=> auth.currentUser);
  const [initializating,setInitializating]=useState(true);
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(user=>{
    if(user) {
      setUser(user);
    }else {
      setUser(null)
    }
    if(initializating) {
      setInitializating(false);
    }
  });
  return unsubscribe;
  }, [initializating])
  const signInWith = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

    const {oko,setOko,choose} = useGlobalContext();//bilo vec
       
    return ( // hero background
  <nav className="navbar  navbar-expand-md navbar-light  sticky-top">{/* bg-dark */}       
                <nav className="container-fluid"> 
{/*           <a className="navbar-brand  ">
 */}               <Link to="/"> <AiFillHome className="fa "/></Link>
   {/*  </a> */}
 <button className="navbar-toggler  ml-auto "
 type="button"   data-toggle="collapse" 
        data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"  
           aria-label="Toggle navigation"> <GiHamburgerMenu/>
 </button>
  <div className="collapse    navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ">
      <li className="nav-item  "> 
         <Link  className="nav-link"  to="/" >
        <AiOutlineHome/> Home</Link>       
     </li>
     {user ? (<> 
<li className="nav-item  ">     
         <Link  className="nav-link"  to="/cart" >
        <FaCartPlus/> Cart</Link>       
     </li> 
      <li className="nav-item ">     
         <Link  className="nav-link"   to="/add" >
        <AiFillFolderAdd/> Add</Link>       
     </li>
</> ): (<></>)}   
   {/*    </ul> 
      <ul className="navbar-nav "> */} 
      <li className="nav-item dropdown ">  
        <a className="nav-link dropdown-toggle"  href="/" /* id="navbarDropdown"  role="button" */ 
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Company       
        </a>
        <div className="dropdown-menu" >
          <p className="dropdown-item"  /* href="/" */ >
          <input className=" input-field "/* mx-auto */
         type="text" placeholder="search specific item" value={oko}
        onChange={(e) => setOko(e.target.value)} />
          </p>    
          <h5 className="dropdown-item" 
      onClick={() => choose("samsung")}
          >Samsung</h5>
          <h5 className="dropdown-item" 
          onClick={() => choose("apple")}
          >Iphone</h5>
          <h5 className="dropdown-item" 
          onClick={() => choose("htc")}  
          >HTC</h5>
           <h5 className="dropdown-item" 
          onClick={() => choose("google")}  
          >Google</h5>
        </div>
      </li>      
{user ? (<> 
  <li className="nav-item  " onClick={signOut}>     
 <Link to="/" className="nav-link"><FaSignOutAlt/> Sign Out
 </Link></li>
</> ):
 (<li  className="nav-item" onClick={signInWith}>
   <Link to="/"  className="nav-link" >
   <FaSignInAlt/>Sign In</Link></li>
 )}
  </ul>  
</div>
</nav>
<Particles  className="particles-canvas"
      params={{
        particles:{
          number:{
            value:200,density:{
              enable:true, value_area:1000
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width: 5,
              color:"#000"
            }
          } ,  
      /*     move: {
            direction: "left",
            out_mode: "out"
        },  */  
        }
      }} />                
           </nav>   
        ) 
      } 
     