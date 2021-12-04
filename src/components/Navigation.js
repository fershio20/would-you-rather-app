import React, { Component } from "react";

class Navigation extends Component{
    handleOnClick = ()=>{
        // todo: Handle Active Tab on navigation bar
    }
    state = {
        menu:{}
    }
    render(){
        return(
            <nav className='main-navigation'>
                <ul>
                    <li className='active'>
                       <a href='#home'>
                        Home
                       </a>
                    </li>
                    <li>
                        <a href="#new-question">
                            New Question
                        </a>
                    </li>
                    <li>
                        <a href='#leaderboard'>
                            Leaderboard
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>Hello, User</li>
                    <li>Avatar</li>
                    <li>
                        <a href='#logout'>Log out</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;