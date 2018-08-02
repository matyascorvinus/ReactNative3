import {CHOOSE_CATEGORY} from '../actions/type';

export default function (state = 'To do',action)
{
    switch(action.type)
    {
        case CHOOSE_CATEGORY:
        {            
            return action.payload;
        }
        default:
            return state;
    }
}