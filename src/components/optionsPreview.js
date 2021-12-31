import React, { Component } from "react";
import {Link} from "react-router-dom";


class OptionsPreview extends Component{
    render(){
        const {text, pollID } = this.props

        return(
            <div>
                <h1  className='mt-4 card-header-title'>Would You Rather...</h1>
                <div className='card-content'>
                    {text}...
                </div>
                <div className='d-grid gap-2"'>

                    <Link   to={ `/questions/${pollID}` }>
                        <button className='button is-primary is-rounded'>
                            View Poll
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default OptionsPreview;