import { ON_CHANGE_TEXT_LEFT, ON_CHANGE_TEXT_RIGHT, ON_PRESS } from './type'
export const onLeftText = (text) => ({
    type: ON_CHANGE_TEXT_LEFT,
    payload: text
})

export const onRightText = (text) => ({
    type: ON_CHANGE_TEXT_RIGHT,
    payload: text
})


export const press = (left, right) => ({
    type: ON_PRESS,
    payload:
    {
        left: left,
        right: right
    }
})