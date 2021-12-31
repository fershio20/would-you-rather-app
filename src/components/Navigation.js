import React, { Component } from "react";

import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";
import {NavLink, withRouter} from "react-router-dom";

class Navigation extends Component{
    handleOnClick = ()=>{
        // todo: Handle Active Tab on navigation bar
    }
    onHandleLogOut = () => {
        this.props.dispatch(setAuthedUser(null));
        // When user is logged out, return to the signin page
        this.props.history.push("/home");
    };
    state = {
        menu:{}
    }
    render(){
        const {name, avatar} = this.props
        return(

                <nav  className="navbar">
                            <div className='navbar-brand'>
                               <h4 className='navbar-item is-bold'>Would your rather?</h4>
                            </div>
                            <div className='navbar-menu'>
                                <div className="navbar-start">
                                    <NavLink to='/' exact activeClassName='active' className='navbar-item'>

                                        Home
                                    </NavLink>
                                    <NavLink to='/add' exact activeClassName='active' className='navbar-item'>

                                        New Questions
                                    </NavLink>
                                    <NavLink to='/leaderboard' exact activeClassName='active' className='navbar-item'>

                                        Leaderboard
                                    </NavLink>
                                </div>
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <div className="buttons">
                                            <div className='is-flex'>
                                                <div>
                                                    Hello {name}

                                                </div>
                                                <div>
                                                    <img
                                                        className='avatar-nav'
                                                        src={avatar}
                                                        alt={name}
                                                        />
                                                </div>

                                            </div>

                                            <a className="button is-light" onClick={this.onHandleLogOut}>
                                                Log Out
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>

        )
    }
}
function mapStateToProps({authedUser, users}){
    const user = users[authedUser];

    return {
        name: user.name,
        avatar: user.avatarURL,
    }
}
export default withRouter(connect(mapStateToProps)(Navigation));