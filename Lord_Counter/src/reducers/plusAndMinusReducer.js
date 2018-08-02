import { PLUS, MINUS } from '../actions/type';
const initialState = 0;
export default function (state = initialState, action) {

    switch (action.type) {
        case (PLUS):
            {
                return state + 1;
            }
        case (MINUS):
            {
                return state - 1;
            }
        default:
            return state;
    }
}