import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import {increaseAction} from '../actions/index';
import {decreaseAction} from '../actions/index';

const mapStateToProps = (state) => {
    console.log("mapStateToProps " + JSON.stringify(state.counterReducer.times))
    return{
        times: state.counterReducer.times ? state.counterReducer.times : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onDecrement : (step) =>{
            dispatch(decreaseAction(step));
        },
        onIncrement : (step) =>{
            dispatch(increaseAction(step));
        }
    }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;
