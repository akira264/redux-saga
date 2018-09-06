import { DECREMENT, INCREMENT } from '../actions/actionTypes';

const initialState = {
    times: 0
  };


const counterReducers = (state = {times : 0}, action) => {
    console.log(" action " + JSON.stringify(action))
    switch (action.type) {
        case INCREMENT:
            return {
                times : state.times + action.step
            };
        case DECREMENT:
            return {
                times : state.times - action.step
            };
            
        default:
            return state; //state does not change
    }
}

export default counterReducers;