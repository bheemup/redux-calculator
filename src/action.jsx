import { DECREMENT, INCREMENT,
ADD_VALUE,DEVIDE_VALUE,
MULTIPLY,SUB_VALUE } from "./Store/action.type";


  export  const add =(value)=>({type: INCREMENT , payload: value});
   export const sub =(value)=>({type: DECREMENT, payload: value});
   export const add_value =(value)=>({type: ADD_VALUE, payload: value});
   export const devide_value =(value)=>({type:DEVIDE_VALUE, payload: value});
   export const multiply =(value)=>({type:MULTIPLY, payload: value});
   export const sub_value =(value)=>({type:SUB_VALUE, payload: value})