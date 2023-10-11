const containers=document.querySelectorAll(".container");
let draggedBox=null;
containers.forEach(container=>{
    //it is called as soon as dragging of container starts and gives info 
    container.addEventListener("dragstart",(e)=>{
        draggedBox=e.target;
        // console.log("drag started ", draggedBox);
        e.target.style.opacity="0.5"
    })

    //when you are dragging over a drop point, only trigerred when we are in a draggable area 
    container.addEventListener("dragover",(e)=>{
        // console.log("draging is going on");
        e.preventDefault();
    })
    //when we leave the draggable container / press esc 
    container.addEventListener("dragend",(e)=>{
        // console.log("drag has ended");
        e.target.style.opacity="1"
    })
    //drop represents-> when we drop a drggable element in a drop zone 
    container.addEventListener("drop",(e)=>{
        console.log("dropped ");
        if(draggedBox){
            container.appendChild(draggedBox);
        }
        const tid=draggedBox.querySelector(".ticket-id").innerText.split("#")[1];
        //receiving container, i.e. container on which ele will be dropped
        const isPending=container.classList[0]=="pending-cont"?true:false;
        let ticketObj=allTickets.find(obj=>obj.id==tid);
        ticketObj.isPending=isPending;
        updateLocalStorage()

    })



})
