import React, { useState, useEffect } from 'react';

function Variations() {
    const [value, setValue] = useState("");
    const [taskList, setTaskList] = useState([]);
    
    const setTask = function () {
        //add new task
        let newTaskList = [...taskList];
        newTaskList.push({
            id: Date.now(),
            task: value
        })
        setTaskList(newTaskList);
        setValue("");
    }
    const removeTask = function (id) {
        let restOftasks = taskList.filter(function (taskObject) {
            return taskObject.id != id;
        })
        setTaskList(restOftasks);
    }

    function firstCb() {
        console.log("first useEffect");
    // cleanup function -> before calling of the next useEffect 
        return ()=>{
            console.log("cleanup is called");
        }
    }
    useEffect(firstCb,[]);

    // function secondCb() {
    //     console.log("second useEffect");
    //     //cleanup function -> before calling of the next useEffect 
    //     return ()=>{
    //         console.log("cleanup is called");
    //     }
    // }
    // useEffect(secondCb);

    // function thirdCb() {
    //     console.log("third useEffect");
    //     //cleanup function -> before calling of the next useEffect 
    //     return ()=>{
    //         console.log("cleanup is called");
    //     }
    // }
    // useEffect(thirdCb,[taskList]);
    

    console.log("render");
    return (
        <>
            <div>
                {/* input */}
                <input type="text" placeholder="Input Task" value={value}
                    onChange={(e) => { setValue(e.target.value) }}></input>
                <button onClick={setTask}>Add Task </button>
            </div>

            {/* list  */}
            {taskList.map((taskObj) => {
                return (
                    <Task key={taskObj.id} id={taskObj.id} task={taskObj.task}
                        removeTask={removeTask}></Task>)
            })}
        </>
    )
}

function Task(props) {
    let { id, task, removeTask } = props;
    return (
        <li
            onClick={() => {
                removeTask(id)
            }}
        >
            {task}
        </li>
    )
}
export default Variations;