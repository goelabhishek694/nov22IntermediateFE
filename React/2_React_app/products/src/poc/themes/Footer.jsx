import React, { useContext } from 'react'
import { ThemeWrapper } from './ThemeManager';
function Footer() {
  return (
    <>
        <div>Footer</div>
        <div>⬇️</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
    </>
  )
}

function Options(){
    const {currTheme}=useContext(ThemeWrapper);
    return <div className={currTheme}>Yoyo</div>
}

export default Footer