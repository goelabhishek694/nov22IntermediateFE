window.addEventListener("load", function () {
    const nr = 8;
    const nc = 8;
    const c1 = "red";
    const c2 = "green";
    const pathColor = "yellow";
    
    let table = document.getElementById("table");

    for (let ri = 0; ri < nr; ri++) {
        let tr = document.createElement("tr");
        // let color=(ri%2==0)?c1:c2;
        let color = (ri % 2 == 0) ? true : false;
        for (let ci = 0; ci < nc; ci++) {
            let td = document.createElement("td");
            // td.innerText=`${ri}-${ci}`
            td.classList.add("box", `${color == true ? c1 : c2}`)
            td.setAttribute("data-index", `${ri}-${ci}`);
            td.setAttribute("data-name", `yolo`);
            tr.appendChild(td);
            // color=color=="white"?c2:c1
            color = !color
        }
        table.appendChild(tr);
    }

    const allBoxes = document.querySelectorAll(".box");

    table.addEventListener("mouseover", function (e) {
        let selectedCell = e.target;
        let [ri, ci]= selectedCell.dataset.index.split("-");
        // console.log(ri);
        // console.log(ci);
        // console.log(selectedCell.dataset.name);

        //********algo********

        //resetboxes
        resetBoxes()
        //mark yourself with pathColor class
        selectedCell.classList.add(pathColor)
        let storageIdx={}
        //get all 4 paths
        topLeft(ri,ci,storageIdx)
        topRight(ri,ci,storageIdx)
        bottomLeft(ri,ci,storageIdx)
        bottomRight(ri,ci,storageIdx)
        //mark them yellow 
        console.log(storageIdx);
        for(let i=0;i<allBoxes.length;i++){
            let idx=allBoxes[i].dataset.index;
            console.log(idx);
            if(storageIdx[idx]==true){
                allBoxes[i].classList.add(pathColor)
            }
        }

    })

    function resetBoxes() {
        allBoxes.forEach(box => {
            box.classList.remove(pathColor);
        })
    }

    function topLeft(ri,ci,storageIdx){
        ri--;
        ci--;
        while(ri>=0 && ci>=0){
            storageIdx[`${ri}-${ci}`]=true;
            ri--;
            ci--;
        }
    }

    function topRight(ri,ci,storageIdx){
        ri--;
        ci++;
        while(ri>=0 && ci<nc){
            storageIdx[`${ri}-${ci}`]=true;
            ri--;
            ci++;
        }
    }

    function bottomLeft(ri,ci,storageIdx){
        ri++;
        ci--;
        while(ri<nr && ci>=0){
            storageIdx[`${ri}-${ci}`]=true;
            ri++;
            ci--;
        }
    }

    function bottomRight(ri,ci,storageIdx){
        ri++;
        ci++;
        while(ri<nr && ci<nc){
            storageIdx[`${ri}-${ci}`]=true;
            ri++;
            ci++;
        }
    }
})