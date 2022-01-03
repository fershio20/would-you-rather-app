import React from 'react'
import {Redirect } from "react-router-dom";


const HistoryHandler = (data)=>{

    return <Redirect to={{pathname: '/login', state: { prevPath: data }}}/>;

}

export default HistoryHandler;