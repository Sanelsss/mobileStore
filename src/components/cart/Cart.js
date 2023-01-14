import React from 'react'
import CartColumns from "./CartColumns"
import CartList from './CartList'
import { useGlobalContext } from '../context'

export default function Cart() {
    const { stock } = useGlobalContext()
 if(stock.length>0) {     
    return (
        <div>
            <CartColumns/>
            <CartList/>
        </div>
    ) }
    return  (  <h3 className="text-title text-center my-5 hero">  
    no items in cart </h3> )   
}
