import React from 'react';
import './button.scss'


const CustomButton = ({ children, isGoogleSignIn, ...buttonProps }) => {

    return (
       <button className={`${isGoogleSignIn ? 'google-sign-in ' : '' }custom-button`} {...buttonProps}>
           {children}
       </button>
    )
}

export default CustomButton;