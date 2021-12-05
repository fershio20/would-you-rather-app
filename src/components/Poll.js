import React, { Component } from "react";
import {Card, Row, Col} from "react-bootstrap";
import { connect } from 'react-redux'
import OptionsPreview from "./optionsPreview";
import Options from "./options";

class Poll extends Component{

    render() {
        const {pollId, optionOne, name, avatarURL, pollType, hasAnswered } = this.props

        return(

            <Card className='w-50 mx-auto'>
                <Card.Header><span className='fw-bold'>{name}</span> asks: {pollId}</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <img alt='name of user' src={avatarURL} width={150}/>
                        </Col>
                        <Col>
                            {
                                pollType === 'poll-list'
                                    ? <OptionsPreview text={optionOne.text} />
                                    : <Options id={pollId} hasAnswered={hasAnswered}/>

                            }

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
function mapStateToProps({authedUser, polls, users}, props){
    const { pollId, type } = props
    const option1 = polls[pollId].optionOne.votes.includes(authedUser)
    const option2 = polls[pollId].optionTwo.votes.includes(authedUser)

    console.log('La encuesta en cuestion: ', (option1 || option2))
    return{
        ...polls[pollId],
        ...users[polls[pollId].author],
        pollType: type,
        hasAnswered: ((option1 || option2)),
    }
}
export default connect(mapStateToProps)(Poll);
