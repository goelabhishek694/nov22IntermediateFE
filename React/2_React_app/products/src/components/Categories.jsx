import { useContext, useEffect, useState } from 'react'
import { usePaginationContext } from '../context/PaginationContext';
function Categories({fn:setCurrCategory}) {
    const [categories, setCategories] = useState(null);
    const {setPageNum}=usePaginationContext();
    useEffect(() => {
        async function getCategories() {
          let res = await fetch(`https://fakestoreapi.com/products/categories`)
          let data = await res.json();
          console.log(data);
          setCategories(data);
        }
        getCategories()
      }, [])
  return (
    <>
    {categories == null ? <h1>Loading....</h1> :<>
        <button className="category" onClick={()=>{
          setCurrCategory("All")
          setPageNum(1)}}>All</button>
          {categories.map(category=>(<button className="category" onClick={()=>{
            setCurrCategory(category)
            setPageNum(1)}}>{category.charAt(0).toUpperCase()+category.slice(1)}</button>))}
          </>}
    </>
  )
}

export default Categories