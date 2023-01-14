import { useParams, Link} from 'react-router-dom'
import React from 'react'

import { useGlobalContext } from './context'

export default function SinglePhone  (/* {company,info,  img, title, price,inCart } */) {
    const {cart} = useGlobalContext()
    const { id } = useParams();
    const [phone, setPhone] = React.useState(null)
    React.useEffect(() => 
    {
      function getPhone() {
       try {
         if (cart) {
      cart.map((cartItem) =>{
          if (id==cartItem.id){
           const phone =  cartItem; 
        setPhone(phone);
        return {...cartItem}
      }
      return {...cartItem}
    }
          );     
         } else {
           setPhone(null)
         }
       } catch (error) {
         console.log(error) 
       }
     }
     getPhone();
   },
   [id,cart]);
     if (!phone) {
      return <h2 className='section-title'>no phone to display</h2>
    } else {
      const {title,inCart,price,company,info,img} = phone; 
      return (
        <section className='  hero my-5  cocktail-section'> {/* {cocktail-section  } */}
          <div className=' container drink   '>
           <div className="row" >
    <div className='col-lg-6 drink-info'>
    <p>
         <span className='drink-data'>price :</span> {price} $
              </p>
              <p>
         <span className='drink-data'>company :</span> {company}
              </p>
              <p>
         <span className='drink-data'>model :</span> {title}
              </p>  
              <p>     
        <span className='drink-data my-0'>inCart:</span>
        {inCart?("Yes"):("No")}</p> 
        </div> 
        <div className='img-i  mx-auto col-lg-3   '>      
    <p>
    <img src={img} alt="product" id="img" className="img-i  ml-auto"/>              
    </p>
        </div>
        </div>
        <div  className = ' drink-info  ' /* drink-info   style={{width:"27rem"}}  */ >          
           <p>  
         <span className='drink-data' >
           info:</span></p> 
           <p className="drink-s" >{info}</p>
              <Link to="/">  <span className="btn btn-black  ml-0"> 
      go back</span>
      </Link>
            </div>      
        </div>
        </section>
      )

   }
}