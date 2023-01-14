import React from 'react'
import { useGlobalContext } from '../context'
import { FiMinus} from "react-icons/fi";
import {AiTwotoneDelete} from "react-icons/ai";
import { BsPlus} from "react-icons/bs";

const  CartI = ({img,price,title,count,id})=> {
    const { decrease,increase,remove } = useGlobalContext();
    return (
        <div className="sample row mx-auto text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
        <img src={img} /* style={{height: "5rem",width:"5rem"}}  */
        className="mx-auto img-fluid" alt="product"/>
            </div>
     <div className="col-10  tt mx-auto col-lg-2 ">
         <span className=" d-lg-none " /*ovo znaci danema na velikom ekrsamo.na.malom*/>product:  </span>
        {title}
     </div> 
     <div className="col-10 mx-auto tt  col-lg-2">
         <span  className=" d-lg-none" >price:  </span>
        {price} $
     </div>   
     {/**/} 
     <div className="tt col-10 mx-auto col-lg-2 justify-content-center">
  {/* <div className="body justify-content-center"> */}
  <span onClick={()=>decrease(id)} className="  mr-2"><FiMinus/></span>
    <span >{count}</span>
<span onClick={()=>increase(id)} className=" ml-2 ">
    <BsPlus/>
    </span>
     {/* </div> */}
 </div>
 <div className="col-10 danger mx-auto tt col-lg-2">
         {/* <div className=" my-3" > */}
         <span    onClick={()=>remove(id)}>
             <AiTwotoneDelete/></span> 
       {/*  </div>  */}
     </div> 
 <div className="col-10  tt mx-auto col-lg-2 ">
        <strong className=""> {count*price} $</strong>
     </div> 
 </div>
    )
}

export default CartI;