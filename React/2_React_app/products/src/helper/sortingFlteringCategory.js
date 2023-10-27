function getFilSortCatData(products, searchTerm, sortState, currCategory,pageNum,pageSize) {
    if(products==null) return;
    let filteredArr = products;
    if (searchTerm != "") {
        console.log(searchTerm);
        filteredArr = filteredArr.filter((product) => {
            let lowerSearchedTerm = searchTerm.toLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchedTerm);
        })
    }

    //sorting products according to price 
    let filteredSortedArr = filteredArr;
    if (sortState != "") {
        console.log(sortState);
        if (sortState == "inc") {
            filteredSortedArr = filteredSortedArr.sort((objA, objB) => objA.price - objB.price)
        }
        else if (sortState == "dec") {
            filteredSortedArr = filteredSortedArr.sort((objA, objB) => objB.price - objA.price)
        }
        else if (sortState == "n") {
            console.log("neutral");
            filteredSortedArr = filteredSortedArr.sort((objA, objB) => objA.id - objB.id);
        }
    }

    //filtering products according to a category
    let filteredSortedCategorizedArr = filteredSortedArr;
    if (currCategory != "All") {
        filteredSortedCategorizedArr = filteredSortedCategorizedArr.filter(obj => obj.category == currCategory)
    }

    let sidx=(pageNum-1)*pageSize;
    let eidx=sidx+pageSize;

    let paginatedData=filteredSortedCategorizedArr;
    console.log(paginatedData);
    paginatedData=paginatedData.slice(sidx,eidx);
    console.log(paginatedData);
    let totalPages=Math.ceil(filteredSortedCategorizedArr.length/pageSize);

    return {paginatedData,totalPages};

}

export default getFilSortCatData;