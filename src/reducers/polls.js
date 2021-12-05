import {ADD_POLL, ADD_POLL_ANSWER, RECEIVE_POLLS} from '../actions/polls'

export default function polls (state = {}, action) {
    switch(action.type) {
        case RECEIVE_POLLS :
            return {
                ...state,
                ...action.polls
            }
        case ADD_POLL_ANSWER:
            const { poll } = action
            return{}
        case ADD_POLL:
            return{}
        default :
            return state
    }
}