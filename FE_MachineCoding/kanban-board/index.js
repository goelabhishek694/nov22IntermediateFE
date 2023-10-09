const toolBoxPriorityContainer=document.querySelector(".toolbox-priority-cont");
const addBtn=document.querySelector(".add-btn");
const deleteBtn=document.querySelector(".remove-btn");
const modal=document.querySelector(".modal-cont");
const prioritySetModal=document.querySelector(".priority-color-cont");
const priorityColorArray=prioritySetModal.children;
const textArea=modal.children[0];
const mainContainer=document.querySelector(".main-cont");
const colorArray=["pink","blue","green","purple"];
let deleteFlag=false;
let currentColor='green';
var uid = new ShortUniqueId({ length: 5 });


// toolbox-cont
toolBoxPriorityContainer.addEventListener("click",function(e){
    if(e.target==e.currentTarget) return
    const currentColorEle=e.target;
    const currentColor=currentColorEle.classList[1];
    let ticketArr=mainContainer.children;
    ticketArr=Array.from(ticketArr);
    ticketArr.forEach((ele)=>{
        let ticketColorEle=ele.children[0];
        let ticketColor=ticketColorEle.classList[1];
        if(ticketColor!==currentColor) ele.style.display="none";
        else ele.style.display="block";
    })
})

toolBoxPriorityContainer.addEventListener("dblclick",function(e){
    let ticketArr=mainContainer.children;
    ticketArr=Array.from(ticketArr);
    ticketArr.forEach((ele)=>{
        ele.style.display="block";
    })
})

//action-btn-cont
addBtn.addEventListener("click",handleModal);

function handleModal(){
    modal.style.display="flex";
}

deleteBtn.addEventListener("click",handleDelete);

function handleDelete(){
    if(!deleteFlag) deleteBtn.style.color="red";
    else deleteBtn.style.color="black";
    deleteFlag=!deleteFlag;
}

// modal and ticket creation 
prioritySetModal.addEventListener("click",handlePriorityColor);
function handlePriorityColor(e){
    if(e.target==e.currentTarget){
        return;
    }
    currentColor=e.target.classList[1];
    console.log(currentColor);
    //traverse and remove
    for(let i=0;i<priorityColorArray.length;i++){
        let colorEle=priorityColorArray[i];
        colorEle.classList.remove("active")
    }
    e.target.classList.add("active");
}

modal.addEventListener("keypress",function(e){
    console.log("key", e.key);
    if(e.key!=="Enter"){
        return;
    }
    const content=textArea.value;
    createTicket(content,currentColor);
    textArea.value="";
    currentColor="green";
    modal.style.display="none"
})

function createTicket(content,color){
    const id=uid.rnd();
    console.log(id);
    const ticketContainer=document.createElement("div");
    ticketContainer.classList.add("ticket-cont")
    ticketContainer.innerHTML=`<div class="ticket-color ${color}"></div>
    <div class="ticket-id">#${id}</div>
    <div class="ticket-area">${content}</div>
    <div class="lock-unlock">
        <i class="fa-solid fa-lock"></i>
    </div>`
    mainContainer.appendChild(ticketContainer);

    const ticketColor=ticketContainer.querySelector(".ticket-color");
    const ticketArea=ticketContainer.querySelector(".ticket-area");
    const lockBtn=ticketContainer.querySelector(".lock-unlock")
    deleteListeners(ticketContainer,id);
    addLockUnlock(ticketArea,lockBtn,id);
    addColourChangeListeners(ticketColor,id)
}


function deleteListeners(ticketContainer,id){
    ticketContainer.addEventListener("click",function(){
        if(deleteFlag){
            ticketContainer.remove();
            //update ls 
        }
    })
}

function addLockUnlock(ticketArea,lockBtn,id){
    lockBtn.addEventListener("click",function(){
        let isLocked=lockBtn.children[0].classList.contains("fa-lock");
        if(isLocked){
            ticketArea.setAttribute("contenteditable","true");
            lockBtn.children[0].classList.add("fa-lock-open")
            lockBtn.children[0].classList.remove("fa-lock")
        }
        else{
            ticketArea.setAttribute("contenteditable","false");
            lockBtn.children[0].classList.remove("fa-lock-open")
            lockBtn.children[0].classList.add("fa-lock")
        }
    })
}

function addColourChangeListeners(ticketColorEle){
    ticketColorEle.addEventListener("click",function(e){
        let color=ticketColorEle.classList[1];
        let colorIdx=colorArray.indexOf(color);
        let newIdx=(colorIdx+1)%colorArray.length;
        let newColor=colorArray[newIdx];
        ticketColorEle.classList.remove(color)
        ticketColorEle.classList.add(newColor)
    })
}
