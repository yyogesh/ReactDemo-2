import {combineReducers, createStore } from 'redux';


const reducer= function(state=0, action){
   if(action.type==="INC"){
       return state+action.data;
   }
   return state;
}
const store= createStore(reducer);

store.subscribe(()=>{
    console.log("scope changed", store.getState())
})
store.dispatch({
    type:"INC",
    data:1
})

store.dispatch({
    type:"INC",
    data:5
})
