import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <ul style={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:"2rem", listStyle:"none"}}>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
     <Link to="/products"><li>Products</li></Link>
    </ul>
    </>
  )
}

export default Navbar