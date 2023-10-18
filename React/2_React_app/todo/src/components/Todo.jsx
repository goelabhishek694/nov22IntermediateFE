import {useState} from 'react'
import InputBox from './InputBox';
import List from './List';

function Todo() {
    
    const [tasksArr,setTasksArr]=useState([]);

    const handleTask=()=>{
        let newTaskArr=[...tasksArr,inputValue]
        console.log(newTaskArr);
        setTasksArr(newTaskArr);
        setValue("")
    }
  return (
    <div>
        <InputBox fn={handleTask}></InputBox>
        <List tasksArr={tasksArr}></List>
    </div>
  )
}


export default Todo