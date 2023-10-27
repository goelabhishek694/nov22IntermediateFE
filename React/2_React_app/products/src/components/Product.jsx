import { useEffect, useState } from 'react'
import ProductList from './ProductList';
import Categories from './Categories';
import getFilSortCatData from "../helper/sortingFlteringCategory";
import SearchSort from './SearchSort';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
function Product() {
  const [products, setProducts] = useState([]);
  const [currCategory, setCurrCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortState, setSortState] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const pageSize = 5;
  const [clname, setClname] = useState("hello");

  useEffect(() => {
    async function getProducts() {
      let res = await fetch(`https://fakestoreapi.com/products`)
      let data = await res.json();
      console.log(data);
      setProducts(data);
    }
    getProducts()
  }, [])

  const obj = getFilSortCatData(products, searchTerm, sortState, currCategory, pageNum, pageSize);
  let data=obj?.paginatedData;
  let totalPages=obj?.totalPages;

  return (
    <>
      <header className='nav-wrapper'>
        <div className="search-sort-wrapper">
          <SearchSort setSearchTerm={setSearchTerm} setSortState={setSortState} searchTerm={searchTerm} setPageNum={setPageNum}></SearchSort>
        </div>
        <div className="categories-container">
          <Categories fn={setCurrCategory} setPageNum={setPageNum}></Categories>
        </div>
      </header>
      <main className='product-wrapper'>
        <ProductList data={data}></ProductList>

      </main>
      <div className="pagination">
        <button onClick={()=>{
          if(pageNum==1) return
          setPageNum(pageNum-1)}} 
          disabled={pageNum==1?"true":false}
          >
          <ArrowLeftIcon fontSize="large"></ArrowLeftIcon>
        </button>
        <p>{pageNum}</p>
        <button onClick={()=>{
          if(pageNum==totalPages) return
          setPageNum(pageNum+1)
          
        }} disabled={pageNum==totalPages?"true":false}>
          <ArrowRightIcon fontSize="large"></ArrowRightIcon>
        </button>

      </div>
    </>
  )
}

export default Product