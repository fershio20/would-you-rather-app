import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import {addPollAnswerToUser, addPollToUser} from "./users";
// import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL_ANSWER = 'ADD_POLL_ANSWER'
export const ADD_POLL = 'ADD_POLL'

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
function addPollAnswer ({ authedUser, pollID, answer }) {
    return {
        type: ADD_POLL_ANSWER,
        pollInfo:{ authedUser, pollID, answer },
    }
}

export function handleAddAnswer(pollID, answer) {

    return (dispatch, getState) => {
        const { authedUser } = getState();

        // dispatch(showLoading());

        return saveQuestionAnswer({
            pollID,
            answer,
            authedUser
        })
            .then(() =>{
                    dispatch(
                        addPollAnswer({
                            pollID,
                            answer,
                            authedUser
                        })
                    )
                    dispatch(
                        addPollAnswerToUser(
                            authedUser,
                            pollID,
                            answer
                        )
                    )
            }



            )
            // .then(() => dispatch(hideLoading()));
    };
}


export function handleAddPoll (newPoll) {
    return (dispatch) => {
        const { authedUser, optionOne, optionTwo } = newPoll

        //dispatch(showLoading())

        return saveQuestion({
            author: authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo,
        })
            .then((poll) => {
                dispatch(addPoll(poll))
                dispatch(addPollToUser(authedUser, poll.id))
            })
            // .then(() => dispatch(hideLoading()))
    }
}