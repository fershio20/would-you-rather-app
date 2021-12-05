import React, { Component } from "react";
import {Col, Container, Nav, Row} from "react-bootstrap";
import {connect} from "react-redux";

class Navigation extends Component{
    handleOnClick = ()=>{
        // todo: Handle Active Tab on navigation bar
    }
    state = {
        menu:{}
    }
    render(){
        const {name, avatar} = this.props
        return(
            <Container>
                <Row>
                    <Col>
                        <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center px-4 pt-4">
                            <Nav.Item>
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">New Questions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link >
                                    LeaderBoards
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    Hello {name}
                                    <img
                                        className='avatar-nav'
                                        src={avatar}
                                        alt={name}
                                        style={{
                                            maxWidth: '35px',
                                        }}/>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link >
                                    Log Out
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        )
    }
}
function mapStateToProps({authedUser, users}){
    const user = users[authedUser];

    return {
        name: user.name,
        avatar: user.avatarURL,
    }
}
export default connect(mapStateToProps)(Navigation);