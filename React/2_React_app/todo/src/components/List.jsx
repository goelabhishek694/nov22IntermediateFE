import React from 'react'

function List(props) {
    const {tasksArr,handleDelete}=props;
    console.log("list is rendered")
    
  return (
    <div className='list'>
            <ul>
                {tasksArr.map((task,idx)=><li onClick={()=>handleDelete(idx)} key={idx}>{task}</li>)}
            </ul>
        </div>
  )
}

export default List