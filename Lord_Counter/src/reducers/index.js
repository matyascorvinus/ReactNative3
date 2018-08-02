import {combineReducers} from 'redux';
import plusAndMinusReducer from './plusAndMinusReducer';
export default combineReducers({
    plusOrMinus: plusAndMinusReducer,
})