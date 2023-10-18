import React from 'react'

function List(props) {
    const {tasksArr}=props;
  return (
    <div className='list'>
            <ul>
                {tasksArr.map(task=><li>{task}</li>)}
            </ul>
        </div>
  )
}

export default List