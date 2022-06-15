 
 import { legacy_createStore }   from "redux";
 import { reducer } from "./Reducer";

 let initialState = {
    count:10,
 }

 export const store =legacy_createStore(reducer,initialState);