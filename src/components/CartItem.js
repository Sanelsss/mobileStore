import React from 'react'
import {  Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import { BsCheck } from "react-icons/bs";

const CartItem = ({ id, img, title, price,inCart,company,info, }) => {
  const { addToCart } = useGlobalContext()
  return (
    <article className='damage my-0'>
      <img src={img} alt={title} className=' my-1 cocktail img'/> {/*mx-auto  */}
      <div className=" single    ">
{/* <SinglePhone id={id}/> */}

      <Link /* to="/SinglePhone" */ to={`/${id}`} >  
         <button   className='  btn btn-black '>   
               details </button>     
        </Link>
        <button   
        className='ml-1 btn btn-black '
          disabled={inCart?true:false}
        onClick={()=>addToCart(id)} >
         {inCart?<p className="my-0 "><BsCheck/></p>:<p
          className="my-0">Add</p>}
          </button>
          </div>
          <div className="cocktail-section ">
        <h6 className="text-blue my-0 ">{title}</h6>
        <h5 className='text-blue my-0 '>${price}</h5>
        </div>
    </article>
  )
}
export default CartItem
