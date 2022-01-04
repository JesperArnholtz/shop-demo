import React from 'react';
import './sign-in-out.styles.scss'
import SignIn from '../../components/sign-in-out/sign-in.component';
import SignUp from '../../components/sign-in-out/sign-up.component';


const SignInOut = () => (
    <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
    </div>
)

export default SignInOut;