import React, {  useContext, useReducer, useEffect,useState } from 'react'
import cartItems from './data'
import reducer from './reducer'
const AppContext = React.createContext()

const initialState = { 
  loading: false,
  cart: cartItems,
  modal:false,
  stock:[],
  total: 0,
  count: 0,
  img:'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',

}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [id, setId] = useState(0); 
/* 
  const openModal = () => {
    dispatch({ type: 'OPENMODAL' })
  }
  const closeModal = (e) => {
    dispatch({ type: 'CLOSEMODAL' })
  } */
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const choose = (  type,oo,ss) => {
    dispatch({ type: 'CHOOSE', payload:{ type,oo,ss } })
  }
  const addToCart = (id) => {
    dispatch({ type: 'ADDTOCART', payload: id })
    dispatch({ type: 'LOADING' })
  }
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  useEffect(() => {
      setTimeout(() => {
        dispatch({ type: 'NON-LOADING' })
        }, 2000);
      });
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart,state.stock])
  const [oko, setOko] = useState("")
  useEffect((id) => {
    dispatch({ type: 'SEARCH',payload: oko })
    },[oko]);
  return (
    <AppContext.Provider
      value={{
        ...state,increase,clearCart,addToCart,decrease,
        remove,oko,setOko,choose,toggleAmount,setId,id}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { /* AppContext,  */AppProvider }
