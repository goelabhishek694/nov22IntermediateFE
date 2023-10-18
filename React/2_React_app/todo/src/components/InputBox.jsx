import React from 'react'

function InputBox(props) {
    const {handleTask}=props;
    console.log(handleTask)
    const [inputValue,setValue]=useState("");
    const handleValue=(e)=>{
        setValue(e.target.value);
    }

  return (
    <div className='inputBox'>
            <input type="text" placeholder='Enter you Tasks....' value={inputValue} onChange={handleValue}></input>
            <button onClick={handleTask()}>Add Task</button>
        </div>
  )
}

export default InputBox