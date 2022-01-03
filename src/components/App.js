import '../assets/App.css';
import React, { Component , Fragment} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { handleInitialData } from "../actions/shared";
import 'bulma/css/bulma.min.css';
import Navigation from "./Navigation";
import Home from './Home'
import PollPage from "./PollPage";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import {LoadingBar} from "react-redux-loading";
import NotFound from "./commons/NotFound";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render(){

        return (

                <Router>
                    <Fragment>
                        <LoadingBar />
                        <div className=''>

                            <Switch>
                                <Route path='/login' exact component={Login} />
                                <Route exact path='/' component={Home} />
                                <Route exact path='/leaderboard' component={Leaderboard} />
                                <Route exact path='/add' component={NewQuestion} />
                                <Route exact path='/questions/:question_id' component={PollPage} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>



        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === false
    }
}

export default connect(mapStateToProps)(App)