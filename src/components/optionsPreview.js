import React, { Component } from "react";
import {Button, Card} from "react-bootstrap";


class OptionsPreview extends Component{
    render(){
        const {text} = this.props

        return(
            <div>
                <Card.Title className='mt-4'>Would You Rather...</Card.Title>
                <Card.Text>
                    {text}...
                </Card.Text>
                <div className='d-grid gap-2"'>
                    <Button variant="outline-primary" className='px-4'>View Poll</Button>
                </div>
            </div>
        )
    }
}

export default OptionsPreview;