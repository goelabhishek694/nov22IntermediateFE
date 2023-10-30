import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSlice from '../../redux/todoSlice';
const actions=todoSlice.actions;
function ReduxTodo() {
  const {inputValue,tasksArr}=useSelector((store)=>{return store.todoState});
  const dispatch=useDispatch();
  const handleValue=(e)=>{
    const updatedVal=e.target.value;
    dispatch(actions.updateInput(updatedVal))
  }
  const handleAdd=()=>{
    dispatch(actions.addTask())
  }
  return (
    <>
      <div className='inputBox'>
        <input type="text" placeholder='Enter you Tasks....' value={inputValue} onChange={handleValue}></input>
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <div className='list'>
        <ul>
          {tasksArr.map((task, idx) => <li key={idx}>{task}</li>)}
        </ul>
      </div>
    </>
  )
}

export default ReduxTodo