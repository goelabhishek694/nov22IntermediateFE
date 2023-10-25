import { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function SearchSort({setSearchTerm,setSortState, searchTerm}) {
    const handleInput = (e) => {
        console.log("items searched", e.target.value);
        setSearchTerm(e.target.value);
      }

    return (
        <><input className='search-input' type='text' value={searchTerm} onChange={handleInput}>
        </input>
            <div className="sort-container">
                <ArrowUpwardIcon onClick={() => setSortState("inc")} fontSize="large" style={{ color: "white" }} ></ArrowUpwardIcon>
                <ArrowDownwardIcon onClick={() => setSortState("dec")} fontSize="large" style={{ color: "white" }} ></ArrowDownwardIcon>
                <RestartAltIcon onClick={() => setSortState("n")} fontSize="large" style={{ color: "white" }} ></RestartAltIcon>
            </div></>
    )
}

export default SearchSort