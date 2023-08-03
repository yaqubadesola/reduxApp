import { INCREMENT,DECREMENT, INCREMENTBYFIVE, DECREMENTBYFIVE,RESET } from "../actionTypes";


export const increaseCounter = () => {
    return {
        type:INCREMENT
    }
}

export const decreaseCounter = () => {
    return {
        type:DECREMENT
    }
}

export const increaseByFiveCounter = () => {
    return {
        type:INCREMENTBYFIVE,
        payload:5
    }
}

export const decreaseByFiveCounter = () => {
    return {
        type:DECREMENTBYFIVE,
        payload:5
    }
}

export const reset = () => {
    return {
        type:RESET,
    }
}