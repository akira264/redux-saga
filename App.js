import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';

//Redux saga
import createSagaMiddleware from 'redux-saga';
// Middleware
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas/rootSaga'

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CounterContainer/>
            </Provider>
        );
    }
}

sagaMiddleware.run(rootSaga);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
