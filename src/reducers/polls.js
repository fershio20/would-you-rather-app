import {ADD_POLL, ADD_POLL_ANSWER, RECEIVE_POLLS} from '../actions/polls'

export default function polls (state = {}, action) {
    switch(action.type) {
        case RECEIVE_POLLS :
            return {
                ...state,
                ...action.polls
            }
        case ADD_POLL_ANSWER:
            const { authedUser, pollID, answer } = action.pollInfo
            return{
                ...state,
                [pollID]:{
                    ...state[pollID],
                    [answer]:{
                        ...state[pollID][answer],
                        votes: state[pollID][answer].votes.concat([authedUser])
                    }
                }
            }
        case ADD_POLL:
            return{
                ...state,
                [action.poll.id]: {...action.poll},
            }
        default :
            return state
    }
}