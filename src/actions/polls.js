import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL_ANSWER = 'RECEIVE_POLLS'
export const ADD_POLL = 'RECEIVE_POLLS'

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}


function addPoll (poll) {
    return {
        type: ADD_POLL,
        poll,
    }
}
function addPollAnswer (poll) {
    return {
        type: ADD_POLL_ANSWER,
        poll,
    }
}

