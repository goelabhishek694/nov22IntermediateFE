import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import counterSlice from '../../redux/counterSlice';
const actions=counterSlice.actions;
console.log(actions);
// {increment: ƒ, decrement: ƒ}
console.log(counterSlice);
// {name: 'counterName', actions: { increment: ƒ, decrement: ƒ}, caseReducers:  {increment: ƒ, decrement: ƒ}, reducer: ƒ, getInitialState: ƒ}

function ReduxCounter() {
    //need access to the count state 
    const count=useSelector((store)=>{return store.counterState.count});
    const dispatch=useDispatch();
    const handleIncrement = () => {
        console.log("counter incremented");
        dispatch(actions.increment())
    }

    const handleDecrement = () => {
        console.log("counter decremented");
        if (count < 1) {
            alert("Count cannot be negative")
            return
        }
        dispatch(actions.decrement())
    }
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <p>{count}</p>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default ReduxCounter