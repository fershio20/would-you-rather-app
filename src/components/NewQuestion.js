import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {handleAddPoll} from "../actions/polls";
import {Redirect, withRouter} from "react-router-dom";
import Navigation from "./Navigation";


class NewQuestion extends Component{
    state = {
        optionOne: '',
        optionTwo: '',
    }

    handleChange = (e)=>{
        const id = e.target.id;
        const value = e.target.value;

        this.setState((prevState)=>{
            return{
                ...prevState,
                [id]: value
            }
        })

    }

    // After clicking the submit button the onSubmit event call this function in order to send the data
    // To dispatch the action creator to the store
    handleSubmit = (e)=>{
        e.preventDefault()
        const {dispatch, authedUser } = this.props
        const optionOne = e.target[0].value
        const optionTwo = e.target[1].value

        dispatch(handleAddPoll({authedUser, optionOne, optionTwo}))
        this.props.history.push("/home");
    }

    render() {
        if (!this.props.authedUser) {
            return <Redirect to="/" />;
        }
        return(
            <Fragment>
                <Navigation />
                <div className='container mt-5'>
                    <div className='columns is-justify-content-center '>
                        <div className='column is-half is-justify-content-center'>
                            <div className='card'>
                                <header className='card-header'>

                                    <h1 className='card-header-title'>
                                        Add New Questions
                                    </h1>
                                </header>
                                <div className='card-content'>
                                    <h1  className='card-header-title'>Would you rather...</h1>
                                    <div className='mt-4 '>
                                        <form onSubmit={(e)=> this.handleSubmit(e)}>
                                            <div className="mb-3 text-start field" id="optionOne">
                                                <label className='label'>Option 1</label>
                                                <input type="text"
                                                       id='optionOne'
                                                       placeholder="Add option 1"
                                                       className='input'
                                                       onChange={(e)=>this.handleChange(e)}
                                                       value={this.state.optionOne}/>

                                            </div>

                                            <div className="mb-3 text-start field" id="optionTwo">
                                                <label className='label'>Option 2</label>
                                                <input type="text" placeholder="Add option 2" name=''
                                                       id='optionTwo'
                                                       className='input'
                                                       onChange={(e)=>this.handleChange(e)}
                                                       value={this.state.optionTwo}/>
                                            </div>
                                            <button className='button is-link' type="submit">
                                                Save Question
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

    )
    }

}

function mapStateToProps({authedUser}){
    return{
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))