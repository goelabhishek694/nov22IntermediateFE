import { useState } from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Cart from './pages/Cart'
import Routing from './poc/Routing'
import "./App.css"
import "./Navbar.css"
import Context from './poc/Context'
import ThemeManager from './poc/themes/ThemeManager'
import PaginationContext from './context/PaginationContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Routing/> */}
    <PaginationContext>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
      <Route path="/products" element={<Product></Product>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </PaginationContext>
    {/* <Context></Context> */}
    {/* <ThemeManager></ThemeManager> */}
    </>
  )
}

export default App
