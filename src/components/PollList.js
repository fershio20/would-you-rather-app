import React, {Component} from "react";
import Poll from "./Poll";

import {connect} from "react-redux";
import {orderByTimestamp} from '../utils/helpers'

class PollList extends Component {
    state = {
        tabStatus: 'unanswered',
    }
    handleOnClick = (e) =>{
        e.preventDefault()
        const value = e.target.id
        this.setState(()=>({
            tabStatus: value
        }))
    }
    render() {
        const {pollsAnsweredIDs, pollsUnansweredIDs} = this.props

        return (
            <div id="poll-nav" className='container mt-5'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column'>
                            <div className='tabs is-centered is-large'>

                                <ul className="justify-content-center">
                                    <li className={this.state.tabStatus === 'unanswered'?  'is-active' : ''}>
                                        <a className='nav-button-pill'
                                           onClick={e=> this.handleOnClick(e)}
                                           id="unanswered">Unanswered Poll</a>
                                    </li>
                                    <li className={this.state.tabStatus === 'answered'?  'is-active' : ''}>
                                        <a className='nav-button-pill'
                                           onClick={e=> this.handleOnClick(e)}
                                            id="answered">Answered Poll</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='columns'>
                        <div className='column'>
                            <div className='tab-content'>
                                <div className={this.state.tabStatus === 'answered' ? 'is-active' : '' }>
                                    <div className='tab-pane'>
                                        <ul className='list-unstyled'>
                                            {pollsAnsweredIDs.map((id) => (

                                                <li key={id} className='mb-4'>
                                                    <Poll pollId={id} type='poll-list'/>
                                                </li>

                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className={this.state.tabStatus === 'unanswered' ? 'is-active' : ''}>
                                    <div className='tab-pane'>
                                        <ul className='list-unstyled'>
                                            {pollsUnansweredIDs.map((id) => (
                                                <li key={id} className='mb-4'>
                                                    <Poll pollId={id} type='poll-list'/>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, polls}) {
    const user = users[authedUser]
    const answeredIds = user ? Object.keys(user['answers']) : [];
    const unansweredIDs = user ? Object.keys(polls).filter(pollID => !(answeredIds.includes(pollID))) : []

    return {
        pollsAnsweredIDs: orderByTimestamp(polls, answeredIds),
        pollsUnansweredIDs: orderByTimestamp(polls, unansweredIDs),
    }
}

export default connect(mapStateToProps)(PollList);