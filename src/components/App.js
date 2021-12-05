import '../assets/App.css';
import React, { Component } from "react";
import {connect} from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from './Home'
import PollPage from "./PollPage";
import Navigation from "./Navigation";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render(){

        return (

            <div className="App">

                {this.props.loading === true
                    ? null
                    : <div>

                        <Navigation/>
                        {/*<Home/>*/}
                        <PollPage />
                    </div>}

            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)