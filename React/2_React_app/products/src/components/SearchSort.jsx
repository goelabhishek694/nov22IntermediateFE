import { useEffect, useState, useContext } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { usePaginationContext } from './context/PaginationContext';
function SearchSort({setSearchTerm,setSortState, searchTerm}) {
    const {setPageNum}=usePaginationContext();
    const handleInput = (e) => {
        console.log("items searched", e.target.value);
        setSearchTerm(e.target.value);
        setPageNum(1);
      }

    return (
        <><input className='search-input' type='text' value={searchTerm} onChange={handleInput}>
        </input>
            <div className="sort-container">
                <ArrowUpwardIcon onClick={() => {
                    setSortState("inc")
                    setPageNum(1);
                    }} fontSize="large" style={{ color: "white" }} ></ArrowUpwardIcon>
                <ArrowDownwardIcon onClick={() => {
                    setSortState("dec")
                    setPageNum(1);
                }} fontSize="large" style={{ color: "white" }} ></ArrowDownwardIcon>
                <RestartAltIcon onClick={() => {
                    setSortState("n")
                    setPageNum(1);}} fontSize="large" style={{ color: "white" }} ></RestartAltIcon>
            </div></>
    )
}

export default SearchSort