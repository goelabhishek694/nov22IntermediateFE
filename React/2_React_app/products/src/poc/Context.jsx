import React, { createContext, useContext } from 'react'
const ContextWrapper=createContext();
const data={
    msg:"Hello",
    pageNum:1,
}
function Context() {
  return (
    <ContextWrapper.Provider value={data}>
    <Grandparent></Grandparent>
    </ContextWrapper.Provider>
  )
}

function Grandparent(){
    return <>
    <h3>Grandparent</h3>
    <div>⬇️</div>
    <Parent></Parent>
    </>
}

function Parent(){
    return <>
    <h3>Parent</h3>
    <div>⬇️</div>
    <Child></Child>
    </>
}

function Child(){
    const {msg}=useContext(ContextWrapper);
    console.log(data);
    return <>
    <h3>Child</h3>
    <div>⬇️</div>
    <p>{msg}</p>
    </>
}






export default Context