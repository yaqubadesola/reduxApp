import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import {
            increaseCounter, 
            decreaseCounter, 
            increaseByFiveCounter,
            decreaseByFiveCounter,
            reset
        } from "../actions"
function Counter(props) {
    const count = useSelector( state=> state.count)
    const dispatch = useDispatch()
    return (
        <div>
            {console.log("Default State ", count)}
            <h1>Counter Display : {count}</h1>
            <button onClick={() => dispatch(increaseCounter())}>Increment</button>
            <button onClick={() => dispatch(decreaseCounter())}>Decrement</button>
            <button onClick={() => dispatch(increaseByFiveCounter())}>Increment By 5</button>
            <button onClick={() => dispatch(decreaseByFiveCounter())}>Decrement Decrease by 5</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default Counter;