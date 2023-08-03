import { INCREMENT,DECREMENT, DECREMENTBYFIVE, INCREMENTBYFIVE, RESET } from "../actionTypes";

const initailState = {
    count: 0
}

const counterReducer = (state = initailState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state, count: state.count - 1
            }
        case INCREMENTBYFIVE:
            return {
                ...state, count: state.count + action.payload
            }
        case DECREMENTBYFIVE:
            return {
                ...state, count: state.count - action.payload
            }
        case RESET:
            return {
                ...state, count: 0
            }
        default:
            return state;
    }
}

export {initailState, counterReducer}