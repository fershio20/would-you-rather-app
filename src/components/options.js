import React, { Component } from "react";
import {connect} from "react-redux";
import {handleAddAnswer} from "../actions/polls";

class Options extends Component{
    state = {
        selectedOption: 'optionOne',
    }
    onValueChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });

    }
    formSubmit = (e, id) => {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(handleAddAnswer(id, this.state.selectedOption))

    }
    render() {
        const { id, hasAnswered, optionOne, optionTwo, totalVotes, totalVotesOption1, totalVotesOption2 } = this.props

        return(
            <div>
                <h3>Would you rather?</h3>
                { !hasAnswered &&
                    <form onSubmit={ (e) => this.formSubmit(e, id)}>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value='optionOne'
                                name = "checkbox"
                                checked={this.state.selectedOption === "optionOne"}
                                onChange={this.onValueChange}
                            />
                            {optionOne.text}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value='optionTwo'
                                name = "checkbox"
                                checked={this.state.selectedOption === "optionTwo"}
                                onChange={this.onValueChange}
                            />
                            {optionTwo.text}
                        </label>
                    </div>
                    <button className='button is-primary is-rounded'  type="submit">
                        Submit
                    </button>
                </form>
                }
                {/* Display Results if user has answered the poll */}
                { hasAnswered &&
                    <div>
                        <h4>Results</h4>
                        <div className='result-box-item'>
                            <h6>{optionOne.text}</h6>
                            <div>
                                {totalVotesOption1} / {totalVotes}
                            </div>
                        </div>
                        <hr/>
                        <div className='result-box-item'>
                            <h6>{optionTwo.text}</h6>
                            <div>
                                {totalVotesOption2} / {totalVotes}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, polls}, props){
        const poll = polls[props.id];
        let totalVotesOption1 =  poll.optionOne.votes.length
        let totalVotesOption2 =  poll.optionTwo.votes.length

    return{
        ...poll,
        totalVotesOption1: totalVotesOption1,
        totalVotesOption2: totalVotesOption2,
        totalVotes: totalVotesOption1 + totalVotesOption2,
    }
}

export default connect(mapStateToProps)(Options)