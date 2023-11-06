import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
function Navbar() {
  const {cartQuantity}=useSelector((store)=>{return store.cartReducer})
  return (
    <>
    <ul className='navbar'>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
     <Link to="/products"><li>Products</li></Link>
     <Link to="/products"><li>Products</li></Link>
     <Link to="/cart"><li><ShoppingCartIcon></ShoppingCartIcon>
        <span>{cartQuantity}</span></li></Link>
    </ul>
    </>
  )
}

export default Navbar