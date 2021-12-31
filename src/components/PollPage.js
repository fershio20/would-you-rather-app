import React, {Component, Fragment} from "react";
import Poll from "./Poll";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import {Redirect} from "react-router-dom";



class PollPage extends Component{

    render(){
        const {id, authedUser} = this.props
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
                    <Poll pollId={id} type='poll-page' />

                </div>
            </Fragment>

        )
    }
}
function mapStateToProps({authedUser}, props){
    const { id } = props.match.params
    return{
        id,
        authedUser
    }
}

export default connect(mapStateToProps)(PollPage);