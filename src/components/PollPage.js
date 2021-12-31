import React, {Component, Fragment} from "react";
import Poll from "./Poll";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import {Redirect} from "react-router-dom";



class PollPage extends Component{

    render(){
        const {question_id, authedUser} = this.props
        if (!authedUser) {
            return <Redirect to="/" />;
        }


        return(
            <Fragment>
                <Navigation />
                <div className='poll-page mt-4'>
                    {/* Answered Poll*/}
                    {/*<Poll pollId='vthrdm985a262al8qx3do' type='poll-page' />*/}

                    {/* Unaswered Poll */}
                    <Poll pollId={question_id} type='poll-page' />

                </div>
            </Fragment>

        )
    }
}
function mapStateToProps({authedUser}, props){
    const { question_id } = props.match.params
    return{
        question_id,
        authedUser
    }
}

export default connect(mapStateToProps)(PollPage);