import React, {Component} from "react";
import Navigation from "../Navigation";
import {connect} from "react-redux";

class NotFound extends Component{
    render(){
        const { authedUser } = this.props
        console.log('que onda way, ', authedUser)

        return(
            <div>
                {authedUser && <Navigation/>}
                <div className='Container mt-5'>
                    <div className="columns">
                        <div className="column has-text-centered">

                            <h1>404</h1>
                            <h3>Page NOT FOUND</h3>
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