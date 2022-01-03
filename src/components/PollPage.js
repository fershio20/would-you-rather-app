import React, {Component, Fragment} from "react";
import Poll from "./Poll";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import {Redirect, withRouter} from "react-router-dom";
import HistoryHandler from "../utils/HistoryHandler";
import NotFound from "./commons/NotFound";



class PollPage extends Component{

    render(){
        const {question_id, authedUser} = this.props
        if (!authedUser ) {
            return HistoryHandler(this.props.history.location.pathname);
        }
        return(
            <Fragment>
                <Navigation />
                <div className='poll-page mt-4'>
                    {question_id ? <Poll pollId={question_id} type='poll-page' /> : <NotFound />}
                </div>
            </Fragment>

        )
    }
}
function mapStateToProps({authedUser, polls}, props){

    const { question_id } = props.match.params
    return{
        question_id: polls.hasOwnProperty(question_id) ? question_id : false,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(PollPage));