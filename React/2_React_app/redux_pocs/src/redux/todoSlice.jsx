import {createSlice} from "@reduxjs/toolkit"
const todoSlice=createSlice({
    name:"todo",
    initialState:{
        inputValue:"",
        tasksArr:[]
    },
    reducers:{
        updateInput:(state,obj)=>{
            console.log(obj.payload);
            state.inputValue=obj.payload;
        },
        addTask:(state)=>{
            const newTasksArr=[...state.tasksArr,state.inputValue];
            state.tasksArr=newTasksArr;
            state.inputValue="";
        },
    }
})


export default todoSlice