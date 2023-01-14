import React from 'react';
import CartI from "./CartI";
import { useGlobalContext } from '../context'

export default function CartList() {
    const { stock,clearCart,total,count} = useGlobalContext()
    return (
     <div /* className="container-fluid" */>        
    {stock.map((clan)=>{  
    return <CartI key={clan.id} {...clan} />
          })}       
    <article className="my-2 ml-2">{/* mr-2  dodaj btn-danger*/}
  <button className='btn  btn-danger ' 
  onClick={clearCart}>
        clear cart
        </button>
        <h3 className="my-0 text-blue">total: {total} $</h3>
        <h3 className="my-0 text-blue" >count: {count}</h3>
        </article>
     </div>
    ) 
}  