// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
// import About from "./pages/About"
// import Products from "./pages/Products"
import {lazy,Suspense,useState} from "react";

const About=lazy(()=>{return import("./pages/About")})
const Products=lazy(()=>{return import("./pages/Products")})

function App() {
  const [posts,setPosts]=useState([]);
  const handleClick=()=>{
    import("./posts").then((module)=>{
      setPosts(module.default);
    })
  }
  return (
    <>
    <h1>I am app</h1>
    <button onClick={handleClick}>Add</button>
    <Suspense fallback={<h2>......loading</h2>}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
