import React, { createContext,useContext,useState } from 'react'
//1 . create context
export const PaginationWrapper=createContext();

function PaginationContext({children}) {
    const [pageNum, setPageNum] = useState(1);
    const [pageSize, setPageSize] = useState(4);

    const pageContextObj={
        pageNum,setPageNum,pageSize,setPageSize
    }

  return (
    // 2/.
    <PaginationWrapper.Provider value={pageContextObj}>
        {children}
    </PaginationWrapper.Provider>
  )
}
//custom hook-> anything that starts with use is a hook 
export const usePaginationContext=()=>useContext(PaginationWrapper);
export default PaginationContext