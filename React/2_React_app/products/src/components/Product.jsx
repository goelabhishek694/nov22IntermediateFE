import {useEffect,useState} from 'react'

function Product() {
  const [products,setProducts]=useState(null);
  const [searchTerm,setSearchTerm]=useState("");
  useEffect(()=>{
    async function getProducts(){
        let res=await fetch(`https://fakestoreapi.com/products`)
        let data=await res.json();
        console.log(data);
        setProducts(data);
    }
    getProducts()
},[])

const handleInput=(e)=>{
  console.log("items searched", e.target.value);
  setSearchTerm(e.target.value);
}

let filteredArr=products;
if(searchTerm!=""){
  console.log(searchTerm);
  filteredArr=filteredArr.filter((product)=>{
    let lowerSearchedTerm=searchTerm.toLowerCase();
    let lowerTitle=product.title.toLowerCase();
    return lowerTitle.includes(lowerSearchedTerm);
  })
}
return (
    <>
    <header className='nav-wrapper'>
      <input className='search-input' type='text' value={searchTerm} onChange={handleInput}>
      </input>
    </header>
    <main className='product-wrapper'>
{filteredArr==null?<h1>Loading....</h1>:<>
{
filteredArr.map(({id,image,title,price})=>(
    <>
    <div key={id} className='product'>
      <img src={image} className="product-image"/>
    <div className='product-meta'>
      <p className='product-title'>{title}</p>
      <p className='Price'>$ {price}</p>
    </div>
    </div>
    </>
    ))
}</>}
</main>
</>
)
}

export default Product