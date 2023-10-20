import {useState} from 'react'

function InputBox(props) {
    const {handleTask}=props;

    const [inputValue,setValue]=useState("");
    const handleValue=(e)=>{
        setValue(e.target.value);
    }

    const handleAdd=()=>{
      handleTask(inputValue)
      setValue("");
    }

    console.log("IB is rendered")

  return (
    <div className='inputBox'>
            <input type="text" placeholder='Enter you Tasks....' value={inputValue} onChange={handleValue}></input>
            <button onClick={handleAdd}>Add Task</button>
        </div>
  )
}

export default InputBox