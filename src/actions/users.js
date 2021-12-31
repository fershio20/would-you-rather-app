export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_POLL_TO_USER = 'ADD_POLL_TO_USER'
export const ADD_POLL_ANSWER_TO_USER = 'ADD_POLL_ANSWER_TO_USER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addPollAnswerToUser(authedUser, pollID, answer){
    return{
        type: ADD_POLL_ANSWER_TO_USER,
        authedUser,
        pollID,
        answer
    }
}
export function addPollToUser(authedUser, pollID){
    return{
        type: ADD_POLL_TO_USER,
        authedUser,
        pollID
    }
}