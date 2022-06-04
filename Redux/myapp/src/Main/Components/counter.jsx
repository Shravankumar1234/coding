import React from 'react'
import { increment,decrement } from '../Counter/Action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const Counter = () => {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.count)
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch(increment(2))}>Increment</button>
        <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}
