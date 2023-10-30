import React from 'react'

function Counter() {
    let [count, setCount] = React.useState(0);
    const handleIncrement = () => {
        console.log("counter incremented");
        setCount(count + 1);
    }

    const handleDecrement = () => {
        console.log("counter decremented");
        if (count < 1) {
            alert("Count cannot be neagtive")
            return

        }
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <p>{count}</p>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter