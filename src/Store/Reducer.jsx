 
import { DECREMENT, INCREMENT,
  ADD_VALUE,DEVIDE_VALUE,
  MULTIPLY,SUB_VALUE } from "./action.type";

 
 export const reducer =(state ,action)=>{
    console.log(state,action)
  switch(action.type){
    case INCREMENT :
     { state.count++;
      return {...state}};

    case DECREMENT:
     { state.count--;
      return {...state}};

    case ADD_VALUE :{
   action.payload = +(action.payload)
      state.count+=action.payload;
      return {...state}
    };

    case SUB_VALUE :{
      state.count-=action.payload;
      return {...state}
    };

    case DEVIDE_VALUE :{
      state.count/=action.payload;
      return {...state}
    };

    case MULTIPLY :{
      state.count =state.count*action.payload;
      return {...state}
    };

    default :
   { return state;};
  }
  }