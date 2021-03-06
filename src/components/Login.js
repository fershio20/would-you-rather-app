import {connect} from "react-redux";
import React, {Component} from "react";
import SelectComponent from "./commons/SelectComponent";
import {setAuthedUser} from "../actions/authedUser";
import logo from "../assets/logo.svg";
import {Redirect, withRouter} from "react-router-dom";




class Login extends Component{
    state = {
        selectedUser: '',
        doRedirect: false,
        prevPath:'',
    }

    onHandleSelect = value =>{
        this.setState(()=>(
            {
                selectedUser: value
            }
        ))
    }


    onHandleSubmit = (e)=>{
        e.preventDefault()
        const {dispatch} = this.props

        this.setState((prevState) => ({
            ...prevState,
            doRedirect:  true,
        }))

        dispatch(setAuthedUser(this.state.selectedUser))

    }
    render() {

        const {users} = this.props

        if (this.state.doRedirect === true) {
            const goBackTo = (this.props.location.state !== undefined) ? this.props.location.state.prevPath : '/'
            return <Redirect to={goBackTo} />
        }


        return(
            <div className='container mt-5'>
                <div className='columns'>
                    <div className='column is-half is-offset-one-quarter'>
                        <div className='card'>
                            <div className='card-header w-100 has-text-centered is-justify-content-center'>
                                <div>

                                    <h4 className='card-header-title'>Welcome to the Would You Rather App</h4>
                                    <div>
                                        <p className=''>Please sign in to continue</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content px-5">
                                <div className="text-center mb-6">
                                    <img alt="Would You Rather" src={logo} className="w-50" />
                                </div>
                                <div className=''>
                                    <form onSubmit={e=>this.onHandleSubmit(e)}>
                                        <div className="content has-text-centered" id="formBasicEmail">
                                            <div className='label'>Select your User</div>
                                            <SelectComponent value={users} returnSelect={this.onHandleSelect}/>
                                        </div>

                                        <div className='card-footer mt-5 pt-4'>
                                            <button  type="submit" className='card-footer-item button is-primary'
                                                     disabled={!this.state.selectedUser }
                                            >
                                                Log in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps({users}){
    return{
        users,
    }
}
export default withRouter(connect(mapStateToProps)(Login))