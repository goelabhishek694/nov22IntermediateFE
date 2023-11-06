import React from 'react'
import ProductList from '../components/ProductList'
import { useSelector } from 'react-redux'

function Cart() {
    const data=useSelector((store)=>{return store.cartReducer.cartProducts})
  return (
    <>
        <h1>Cart</h1>
        <div className="cart-product-wrapper">
            <ProductList data={data}></ProductList>
        </div>
        </>
  )
}

export default Cart