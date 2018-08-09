import {ON_PRESS} from '../actions/type';
export default function (state = { left: 1, right: 1 }, action) {
    switch (action.type) {
        case (ON_PRESS):{
            return action.payload;
        }
        default:return state;
    }
}