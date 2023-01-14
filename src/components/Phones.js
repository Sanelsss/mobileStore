import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import SinglePhone from './SinglePhone'
//import {useGlobalContext} from "../context";

export default function Phones({img,price,title,id,count,inCart}) {
  //const { phones } = useGlobalContext();
  const [cou,setCount]=React.useState(0)

  function  increase  (){
   let  ok = cou + 1;
    setCount(ok)
   console.log(ok)
   console.log(count)
   return {ok:count};
   /* this.setState(()=>{
      return {...phone,ok:phone.count}
    }) */
}
    return (
        <article className='cocktail'>
        <div className='img-container'>
          <img src={img} alt={title} />
        </div>
        <div className='cocktail-footer'>
          <h3>{title}</h3>       
          <h6>{price}$</h6>
          <h4>{count}</h4> 
          <button onClick={increase}>+</button>
          <Link to={`${id}`} 
          className='btn btn-primary btn-details'>
          details
        </Link>
        </div>
      </article>
    )
}
