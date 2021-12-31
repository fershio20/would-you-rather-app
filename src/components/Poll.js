import React, { Component } from "react";
import { connect } from 'react-redux'
import OptionsPreview from "./optionsPreview";
import Options from "./options";

class Poll extends Component{

    render() {
        const {pollId, optionOne, name, avatarURL, pollType, hasAnswered } = this.props

        return(

            <div className='card w-50 mx-auto'>
                <div className='card-header'>
                    <h4 className='fw-bold card-header-title'>{name}</h4>
                </div>
                <div className='card-content'>
                    <div className='columns'>
                        <div className='column'>
                            <img alt='name of user' src={avatarURL} width={150}/>
                        </div>
                        <div className='column'>
                            {
                                pollType === 'poll-list'
                                    ? <OptionsPreview pollID={pollId} text={optionOne.text} />
                                    : <Options id={pollId} hasAnswered={hasAnswered}/>

                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({authedUser, polls, users}, props){
    const { pollId, type } = props

    // Gets the poll to be displayed
    const poll = polls[pollId]

    // Verifies if the poll has been answered
    const hasAnswered = poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)

    return{
        ...poll,
        ...users[polls[pollId].author],
        pollType: type,
        hasAnswered: hasAnswered,
    }
}
export default connect(mapStateToProps)(Poll);
