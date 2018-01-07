import { createStore } from 'redux';

const countReducer=(state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        //const incrementBy= typeof action.incrementBy==="number"? action.incrementBy:1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


//unsubscribe();

// store.dispatch({
//     type: "INCREMENT"
// });

// ********************** Action generators ***********************
const incrementCount1=()=>{
    return {
        type:"INCREMENT"
    }
}
//************ we do not need to define return in arrow function
const incrementCount2=()=>{
    return {
        type:"INCREMENT"
    }
}
//***************************Pass Parameter Increment By ****************/
const incrementCount3=(objData={})=>({
        type:"INCREMENT",
        incrementBy: typeof objData.incrementBy==="number" ? objData.incrementBy:1
});
//********************* Destructuring *************************/
const incrementCount4=({incrementBy=1}={})=>({
    type:"INCREMENT",
    incrementBy: incrementBy
});

//********************* Finally we will use like this ***********************
const incrementCount=({incrementBy=1}={})=>({
    type:"INCREMENT",
    incrementBy
});
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:5}));
// or
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy:5
// });

store.dispatch({
    type: "DECREMENT"
});
store.dispatch({
    type: "RESET"
});



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import AppRouter from './routers/approuter'

// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<AppRouter/>, document.getElementById('root'));
// registerServiceWorker();





    


import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


    