import {ON_CHANGE_TEXT_RIGHT} from '../actions/type';
export default function (state = 'Something' ,action )
{
    switch(action.type)
    {
        case(ON_CHANGE_TEXT_RIGHT): return action.payload
        default: return state
       
    }
}