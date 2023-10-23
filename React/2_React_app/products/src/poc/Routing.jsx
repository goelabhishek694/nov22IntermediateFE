import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Routes, Route, Navigate, Link, useParams} from "react-router-dom"
function Routing() {
  return (
    <>
    <div>Navbar</div>
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
     
    </ul>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
      {/* id can be dynamic  */}
      <Route path="/users/:id" element={<User></User>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </>
  )
}

function Home(){
    return <div>Home page </div>
}

function About(){
    return <>
    <div>About Page of company</div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aspernatur quod magnam. Laborum ut sunt expedita nostrum magnam nemo, dolor repellendus soluta neque reprehenderit. Inventore ad necessitatibus accusamus molestias quidem!</p>
    </>
}

function User(){
    const [users,setUsers]=useState(null);
    const {id}=useParams();
    useEffect(()=>{
        async function getUsers(){
            let res=await fetch(`https://fakestoreapi.com/users/${id}`)
            let data=await res.json();
            console.log(data);
            setUsers(data);
        }
        getUsers()
    },[])
    return (
        <>
    <h2>All users</h2>
    {users==null?<h1>Loaading....</h1>:<>
    {
    // users.map(({phone,name})=>(
        <>
        <li>{users.name.firstname}{users.name.lastname}</li>
        <li>{users.phone}</li>
        </>
        // ))
    }</>}
    </>
    )
}

function PageNotFound(){
    return <div>Page not found</div>
}

export default Routing