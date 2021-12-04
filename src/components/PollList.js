import React, { Component } from "react";
import PollItem from "./PollItem";

class PollList extends Component{

    render(){
        return(
            <div>
                <div style=''>
                    Unanswered Poll
                </div>
                <div>
                    Answered Poll
                </div>
                <hr/>

                <PollItem />
            </div>
        )
    }
}

export default PollList;