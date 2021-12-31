import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import {Redirect} from "react-router-dom";



class Leaderboard extends Component{
    render(){
        if (!this.props.authedUser) {
            return <Redirect to="/" />;
        }
        const { users, sortedUserIDs } = this.props

        return(
            <Fragment>
                <Navigation/>
                <div className='container mt-5'>
                    <div className='columns'>
                        <div className='column'>
                            <table className='table mt-4 w-100 is-justify-content-center'>
                                <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Name</td>
                                    <td>Asked</td>
                                    <td>Answered</td>
                                    <td>Total</td>
                                </tr>
                                </thead>
                                <tbody>
                                {sortedUserIDs.map((user, i)=>{
                                    return(
                                        <tr key={user} className='mb-4' id={user + '-user'}>
                                            <td>{i+1}</td>
                                            <td>{users[user].name}</td>
                                            <td>{Object.keys(users[user].answers).length}</td>
                                            <td> {users[user].questions.length}</td>
                                            <td>
                                            <span className='totalPoints'>
                                               {Object.keys(users[user].answers).length + users[user].questions.length}
                                            </span>
                                            </td>
                                        </tr>

                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

function mapStateToProps({authedUser, users}){


    const sortedUserIDs = Object.keys(users).sort((a, b) => {
        const scoreA =
            Object.keys(users[a].answers).length + users[a].questions.length;
        const scoreB =
            Object.keys(users[b].answers).length + users[b].questions.length;


        return scoreB - scoreA;
    });

    return{
        authedUser,
        users,
        sortedUserIDs
    }
}

export default connect(mapStateToProps)(Leaderboard)