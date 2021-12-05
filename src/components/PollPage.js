import React, {Component} from "react";
import Poll from "./Poll";
import Question from "./Question";


class PollPage extends Component{

    render(){
        return(
            <div className='poll-page mt-4'>
                <Poll pollId='loxhs1bqm25b708cmbf3g' type='poll-page' />
                {/*<Question pollId='6ni6ok3ym7mf1p33lnez' />*/}
            </div>
        )
    }
}


export default PollPage;