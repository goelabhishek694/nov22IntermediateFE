import { useEffect, useState } from 'react'

function Categories({fn:setCurrCategory}) {
    const [categories, setCategories] = useState(null);
    
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
        <button className="category" onClick={()=>setCurrCategory("All")}>All</button>
          {categories.map(category=>(<button className="category" onClick={()=>setCurrCategory(category)}>{category.charAt(0).toUpperCase()+category.slice(1)}</button>))}
          </>}
    </>
  )
}

export default Categories