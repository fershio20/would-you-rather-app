import React, { Component } from "react";
import { Button } from "react-bootstrap";
import {connect} from "react-redux";

class Options extends Component{
    state = {
        selectedOption: '',
    }
    onValueChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }
    formSubmit = (e) => {
        e.preventDefault();

    }
    render() {
        const { hasAnswered, optionOne, optionTwo, totalVotes, totalVotesOption1, totalVotesOption2 } = this.props
        console.log(this.props)
        return(
            <div>
                <h3>Would you rather?</h3>
                { !hasAnswered &&
                    <form onSubmit={this.formSubmit}>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Male"
                                checked={this.state.selectedOption === "Male"}
                                onChange={this.onValueChange}
                            />
                            {optionOne.text}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="Female"
                                checked={this.state.selectedOption === "Female"}
                                onChange={this.onValueChange}
                            />
                            {optionTwo.text}
                        </label>
                    </div>
                    <Button variant="outline-primary"  type="submit">
                        Submit
                    </Button>
                </form>
                }
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