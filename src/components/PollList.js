import React, {Component} from "react";
import Poll from "./Poll";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {connect} from "react-redux";
import {orderByTimestamp} from '../utils/helpers'

class PollList extends Component {

    render() {
        const {pollsAnsweredIDs, pollsUnansweredIDs} = this.props

        return (
            <Container id="poll-nav" className='mt-4'>
                <Tab.Container id="poll-tab" defaultActiveKey="unanswered">
                    <Row>
                        <Col sm={12}>
                            <Nav variant="pills" className="justify-content-center">
                                <Nav.Item>
                                    <Nav.Link className='nav-button-pill' eventKey="unanswered">Unanswered Poll</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='nav-button-pill' eventKey="answered">Answered Poll</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={12} className='mt-4'>
                            <Tab.Content>
                                <Tab.Pane eventKey="unanswered">
                                    <ul className='list-unstyled'>
                                        {pollsAnsweredIDs.map((id) => (

                                            <li key={id} className='mb-4'>
                                                <Poll pollId={id} type='poll-list'/>
                                            </li>

                                        ))}
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="answered">
                                    <ul className='list-unstyled'>
                                        {pollsUnansweredIDs.map((id) => (
                                            <li key={id} className='mb-4'>
                                                <Poll pollId={id} type='poll-list'/>
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}

function mapStateToProps ({authedUser, users, polls}) {
    const user = users[authedUser]
    const answeredIds = user ? Object.keys(user['answers']) : [];
    const unansweredIDs = user ? Object.keys(polls).filter(pollID => !(answeredIds.includes(pollID))) : []
    console.log(answeredIds)
    console.log(unansweredIDs)
    return {
        pollsAnsweredIDs: orderByTimestamp(polls, answeredIds),
        pollsUnansweredIDs: orderByTimestamp(polls, unansweredIDs),
    }
}

export default connect(mapStateToProps)(PollList);