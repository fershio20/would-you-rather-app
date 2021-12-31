import React, { Component } from "react";
import PollList from "./PollList";
import Navigation from "./Navigation";
import {  connect} from "react-redux";
import {Redirect} from "react-router-dom";



class Home extends Component{

    render(){
        // Redirect to login Page if not logged in

        if (!this.props.authedUser) {
            return <Redirect to="/login" />;
        }
        return(
            <div>
                <Navigation/>
                <PollList />
            </div>
        )
    }
}
function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}
export default connect(mapStateToProps)(Home);