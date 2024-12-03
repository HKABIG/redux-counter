import { useDispatch, useSelector } from "react-redux"
import { addValue, increment, decrement, reset } from "../store/CounterSlice";
import { useState } from "react";


const Counter = () => {
    const count = useSelector((state=>state.counter.value));
    const dispatch = useDispatch();
    const [input,inputValue] = useState(0);
    const handleChange = () =>{
        inputValue(event.target.value);
    }
  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
        <h1>Counter: {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <input value={input} onChange={handleChange}></input>
        <button onClick={()=>dispatch(addValue(input-'0'))}>AddValue</button>
    </div>
  )
}

export default Counter