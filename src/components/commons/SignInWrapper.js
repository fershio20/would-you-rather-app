import React from 'react'
import {useNavigate} from "react-router-dom";

const SignInWrapper = () => {
    console.log('haupei?')
    let navigate = useNavigate()
    return navigate('/home');
};

export default SignInWrapper