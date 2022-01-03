import React, {Component} from "react";
import Navigation from "../Navigation";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class NotFound extends Component{
    render(){
        const { authedUser } = this.props
        console.log('que onda way, ', authedUser)

        return(
            <div className='no-match-page'>

                <div className='Container mt-5'>
                    <div className="columns">
                        <div className="column has-text-centered">

                            <h1>404</h1>
                            <h3 className='title'>Page NOT FOUND</h3>
                            <Link to='/' className='button is-primary'>
                                {!authedUser ? 'Log In' : 'Go to Home' }
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
function mapStateToProps({authedUser, users}, props){
    console.log('porque no esta llegando aqui el user', users)
    return{
        authedUser,
    }
}

export default connect(mapStateToProps)(NotFound)