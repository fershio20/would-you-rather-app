import {ADD_POLL_ANSWER_TO_USER, ADD_POLL_TO_USER, RECEIVE_USERS} from '../actions/users'

export default function users (state = {}, action) {

    const {authedUser, pollID} = action

    switch(action.type) {
        case ADD_POLL_ANSWER_TO_USER:
            const {answer} = action

            return{
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [pollID]: answer
                    }
                }

            }
        case ADD_POLL_TO_USER:
            return {
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat(pollID)
                }
            }
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        default :
            return state
    }
}