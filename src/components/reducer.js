const reducer = (state, action) => {

  if(action.type === 'OPENMODAL'){
    return {...state,modal:true}
}
  if (action.type === 'CHOOSE') {
     return {
       ...state,
   cart:state.cart.filter((cartItem)=>
   cartItem.company===action.payload.type)
     }
}    
if (action.type === 'LOADING') {
  return { ...state, loading: true }
}
if (action.type === 'NON-LOADING') {
  return { ...state, loading:false }
}
if(action.type === 'CLEAR_CART'){
  return {...state,stock:[], cart: state.cart.map((cartItem)=>{
        cartItem.inCart=false      
        return {...cartItem}
       })}
}
    
      if (action.type === 'ADDTOCART') {
        let tempCart = state.cart.map((cartItem)=>{
          if (cartItem.id === action.payload) {
           cartItem.inCart=true;
           cartItem.count=1;
           const price=cartItem.price;
           cartItem.total=price;
           state.stock.push(cartItem);
          }
          return {...cartItem}
        })
        return {...state,cart:tempCart , stock:state.stock,loading:false  }
      }
      if (action.type === 'REMOVE') {
        return {
          ...state,
stock:state.stock.filter((cartItem)=>cartItem.id!==action.payload),
 cart:state.cart.map((cartItem)=>{
 if (cartItem.id === action.payload) {
   cartItem.inCart=false;
   cartItem.count=0
 }  
          return {...cartItem}
  })
}}
if (action.type === 'SEARCH') {
  const timo = state.cart.map((cartItem)=>{ 
             return {...cartItem}
     }) .filter((cartItem)=>cartItem.title!==action.payload);  
    return {...state,cart:timo}
}

if (action.type === 'DECREASE') {
  let tempCart =  state.stock
  .map((cartItem) => {//kad je 0 nece prvi da radi uredu
    if (cartItem.id === action.payload) {
      return { ...cartItem, count: cartItem.count - 1, }
    }
return cartItem 
  }).filter((cartItem)=>cartItem.count!==0) 
let tempO =  state.cart.map((cartItem)=>{
if (cartItem.id === action.payload  && cartItem.count>1 ) {
return {...cartItem,count:cartItem.count-1  }
}
else  if(cartItem.id === action.payload  && cartItem.count===1) {
return {...cartItem,inCart:cartItem.inCart=false}
      }
      return {...cartItem,count:cartItem.count-1 }
    }) 
return { ...state,stock:tempCart,cart:tempO  
}
}
if (action.type === 'INCREASE') {
let tempCart = state.stock.map((cartItem) => {
if (cartItem.id === action.payload) {
return { ...cartItem, count: cartItem.count + 1 }
}
return cartItem
})
let tempC = state.cart.map((cartItem) => {
if (cartItem.id === action.payload) {
return { ...cartItem, count: cartItem.count + 1 }
     }
     return cartItem
   })
return { ...state, stock: tempCart, cart:tempC  }
}


  if (action.type === 'GET_TOTALS') {
        let { total, count } = state.stock.reduce(
          (cartTotal, cartItem) => {
            const { price, count } = cartItem
            const itemTotal = price * count

            cartTotal.total += itemTotal
            cartTotal.count += count
            return cartTotal
          },
          {
            total: 0,
            count: 0,
          }
        )
        total = parseFloat(total.toFixed(2))
        return { ...state, total, count }
      }
      return state;
}
export default reducer;

 