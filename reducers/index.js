import {combineReducers} from 'redux';
import counterReducer from './CounterReducers';

const allReducers = combineReducers({
    counterReducer,
});

export default allReducers;