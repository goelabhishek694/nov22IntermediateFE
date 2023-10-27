import { useState } from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import About from './components/About'
import PageNotFound from './components/PageNotFound'
import Routing from './poc/Routing'
import "./App.css"
import "./Navbar.css"
import Context from './poc/Context'
import ThemeManager from './poc/themes/ThemeManager'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Routing/> */}
    {/* <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
      <Route path="/products" element={<Product></Product>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes> */}
    {/* <Context></Context> */}
    <ThemeManager></ThemeManager>
    </>
  )
}

export default App
