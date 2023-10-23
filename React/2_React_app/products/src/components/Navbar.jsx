import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div>Navbar</div>
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
     <Link to="/products"><li>Products</li></Link>
    </ul>
    </>
  )
}

export default Navbar