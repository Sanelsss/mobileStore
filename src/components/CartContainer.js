import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const  CartContainer = () => {
  const {cart, total,oko} = useGlobalContext();
  return (
    <section className='cart container hero  '>{/*  mx-auto */}
      <header>
        <h2 className="text-title  text-center my-2 ">products
        </h2>
      </header>
      {/* cart items */}
      <div className="cocktails-center container  my-2 ">
        { cart.filter((val)=>{
        /*   if(oko===""){
            return val;
          } */   
  if((val.title.toLowerCase().includes(oko.toLowerCase()) )){
      return val;
    }       return null;
        }).map(
          (item) => {
            if(item){
          return < CartItem  key={item.id} {...item} />
        }
        return null;
        } 
        )      
        } 
      </div>
      {/* cart footer */}
      <footer>
    <h2 className=" text-blue ml-2">total<span>: {total}$</span></h2>
      </footer>
     
    </section>
  )
}
export default CartContainer
          
  
