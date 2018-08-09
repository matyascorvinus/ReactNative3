import {ON_CHANGE_TEXT_LEFT} from '../actions/type'

export default function (state = 'Something'  ,action )
{
    switch(action.type)
    {
        case(ON_CHANGE_TEXT_LEFT): return action.payload
        default: return state
       
    }
}