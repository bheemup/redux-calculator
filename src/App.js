
import './App.css';

import { useDispatch } from 'react-redux';
import {useSelector}  from "react-redux"
import { add, sub,add_value,sub_value,
  multiply,devide_value } from './action';
import { useState } from 'react';
 
function App() {
  
const [value ,setValue]=useState("")


const handle_value =(e)=>{
 let k =e.target.value;
  setValue(k);
}
 

  
  const disPatch = useDispatch(0)
  const state = useSelector((state)=>state)
  return (
    <div className="App">
    <div>
      <h1>Counter : {state.count}</h1>
    </div>
    <div>
      <button onClick={()=>{disPatch(add())}}>+</button>
      <button onClick={()=>{disPatch(sub())}}>-</button>
    </div>
    <div>
      <input onChange={handle_value} placeholder='Enter value to perform'/>
      <br/>
      <button onClick={()=>{disPatch(add_value(value))}}>Add</button>
      <button onClick={()=>{disPatch(multiply(value))}}>Multiply</button>
      <button onClick={()=>{disPatch(sub_value(value))}}>Subtract</button>
      <button onClick={()=>{disPatch(devide_value(value))}}>Devide</button>
    </div>
    </div>
  );
}



export default App;
