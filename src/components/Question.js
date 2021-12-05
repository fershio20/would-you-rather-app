import React, {Component} from "react";
import { connect } from 'react-redux'



class Question extends Component{

    render(){
        return(
            <div>
                Question Page
            </div>
        )
    }
}

function mapStateToProps({authedUsers, users, polls}, {pollId}){
    console.log('usuarios? ', users)
    console.log('Preguntas2? ', pollId)
    return{

    }
}

export default connect(mapStateToProps)(Question);

