import { createStore } from 'redux';

// 2) write the reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};



const store = createStore(counterReducer) // 1) wants a pointer at a Reducer function as a parameter. 
// https://stackoverflow.com/questions/71944111/redux-createstore-is-deprecated-cannot-get-state-from-getstate-in-redux-ac

// 3) subscribe and dispatch - connect the react app to this Redux store to perform these two actions
export default store;