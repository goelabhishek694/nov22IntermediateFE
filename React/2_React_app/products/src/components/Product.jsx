import { useEffect, useState } from 'react'
import ProductList from './ProductList';
import Categories from './Categories';
import getFilSortCatData from "../helper/sortingFlteringCategory";
import SearchSort from './SearchSort';
function Product() {
  const [products, setProducts] = useState(null);
  const [currCategory, setCurrCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortState, setSortState] = useState("");
  const[pageNum,setPageNum]=useState(1);
  const pageSize=5;
  const [clname,setClname]=useState("hello");
 
  useEffect(() => {
    async function getProducts() {
      let res = await fetch(`https://fakestoreapi.com/products`)
      let data = await res.json();
      console.log(data);
      setProducts(data);
    }
    getProducts()
  }, [])

  const data=getFilSortCatData(products,searchTerm,sortState,currCategory,pageNum,pageSize);

  return (
    <>
      <header className='nav-wrapper'>
        <div className="search-sort-wrapper">
          <SearchSort setSearchTerm={setSearchTerm} setSortState={setSortState} searchTerm={searchTerm}></SearchSort>
        </div>
        <div className="categories-container">
        <Categories fn={setCurrCategory} ></Categories>
        </div>
      </header>
      <main className='product-wrapper'>
        <ProductList data={data}></ProductList>
      </main>
    </>
  )
}

export default Product