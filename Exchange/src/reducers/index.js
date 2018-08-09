import {combineReducers} from 'redux';
import LeftTextReducer from './LeftTextReducer';
import RightTextReducer from './RightTextReducer';
import PressChangerReducer from './PressChangerReducer';
export default combineReducers({
    LeftText: LeftTextReducer,
    RightText: RightTextReducer,
    
    PressChanger: PressChangerReducer,
})