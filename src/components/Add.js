import {  Link } from 'react-router-dom'
import React, { useState } from 'react';
import { useGlobalContext } from './context'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Cart() {
    const { cart,state,setId,id} = useGlobalContext();
    const   img='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png';
    const [title, setTitle] = useState(""); 
     const [price, setPrice] = useState(0); 
     const [profileImg, SetPhoto] = useState(img); 
     const [info, setInfo] = useState(""); 
     const [company, setCompany] = useState(""); 
     const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
     const showAlert = (show = false, type = '', msg = '') => {
      setAlert({ show, type, msg });
    };
     const addProduct = (e) => {
      e.preventDefault();
      let newItem = {   id:Math.round(id+8),
   price,title,company,info,inCart:false,count:0,total:0,
   img:profileImg };
       cart.push(newItem);
     setId(id+1);setTitle("");setPrice(0);setCompany("");
     setInfo("");SetPhoto(img);
     showAlert(true, 'success', 'item added to the list');
     return {...state,cart}
    }  
    const imageHandler=(e)=>{
      e.preventDefault();
  const reader = new FileReader();
  reader.onload=()=>{
      if(reader.readyState === 2){
  SetPhoto(reader.result)
      }
    }
  reader.readAsDataURL(e.target.files[0]);
  showAlert(true, 'success', 'photo added');
  }
    return (
        <div className="  add hero dds ">{/* mx-auto */}
        {/*title*/}
        <nav className="container "> 
        <h3 className="text-title text-center my-3">new product information</h3>
              <div className='row '>
                  <div className='mx-auto'>
         <nav onChange={(e)=>imageHandler(e)}>
        <label htmlFor="input" >
        <input type="file" id="input" 
        accept="image/*" />
       { <img src={profileImg} alt="product" id="img"
        className=" img  ml-auto "  /> }
      <ul className=" kolo ml-auto  text-title">click to add image</ul>
        </label>
        <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
          </nav> 
                 </div>
                 {/*product text */}
            <div className=' mx-auto  text-capitalize'>
        <h4 className="text-blue ">model:<input className="input-field"
         type="text" placeholder="title" value={title}
        onChange={(e) => setTitle(e.target.value)}/> 
        </h4>  
        <h4 className="text-blue ">
        made by:<input className="input-field" type="text"
          style={{width:"7rem"}} value={company}
          placeholder="made by"
          onChange={(e) => setCompany(e.target.value)} 
          /></h4>    
        <h4 className="text-blue">
         <strong> price:
           <input className=" input-field" type="text" 
           value={price}  accept="number/*"
          onChange={(e)=>setPrice(e.target.value)} 
          />
          <i >$</i></strong></h4>
       
        <h4 className="text-blue">
        <p className=" text-capitalize  ">short info:</p></h4>
       
     <textarea className="text-blue input-field-s" type="text" 
        placeholder="some short info about the product..."
         rows="3"  onChange={(e) => setInfo(e.target.value)} 
         />
                           <div className="single">
                     <Link to="/">
          <button className="ml-1 btn btn-black">back</button >   {/* */}                   
                 </Link>                         
       <button   className="btn btn-black"                  
        onClick={(e)=>addProduct(e) }>add</button>                       
                        </div>  
                 </div>
              </div>
              </nav>
                            </div>
                )   
}