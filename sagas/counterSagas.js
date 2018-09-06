import {INCREMENT , DECREMENT} from '../actions/actionTypes';
import  {put, takeEvery} from 'redux-saga/effects';

export function* sayHello(){
    console.log('Hello world saga!');
}

function* increment(){
    console.log('This is increment saga');
}
export function* watchIncrement(){
    yield takeEvery(INCREMENT, increment);
}

function* decrement(){
    console.log('This is decrement saga');
}
export function* watchDecrement(){
    yield takeEvery(DECREMENT, decrement);
}