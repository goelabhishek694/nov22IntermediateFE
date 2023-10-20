import {useState} from 'react'
import InputBox from './InputBox';
import List from './List';

function Todo() {
    
    const [tasksArr,setTasksArr]=useState([]);
    console.log("todo is rendered")
    const handleTask=(inputValue)=>{
        let newTaskArr=[...tasksArr,inputValue]
        console.log(newTaskArr);
        setTasksArr(newTaskArr);
    }

    const handleDelete=(id)=>{
      console.log("delete this task");
      //filter out the task with id 5 , and show the rest of the tasks . 
      let remainingTasks=tasksArr.filter((task,idx)=>idx!=id)
      // console.log(remainingTasks);
      setTasksArr(remainingTasks);
    }

  return (
    <div>
        <InputBox handleTask={handleTask}></InputBox>
        <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
    </div>
  )
}


export default Todo