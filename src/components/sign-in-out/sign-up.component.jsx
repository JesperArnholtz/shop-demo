
import React from 'react';
import './sign-up.styles.scss';
import FormInput  from '../form/form-input';
import CustomButton  from '../form/button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    /*eslint no-undef: "error"*/
    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.error(error);
        }
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form  className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                       onChange={this.handleChange} 
                       id="displayName"  
                       type="text" 
                       name="displayName" 
                       label="displayName" 
                       defaultValue={displayName} 
                       required
                    />
                    <FormInput 
                       onChange={this.handleChange} 
                       id="email"  
                       type="email" 
                       name="email" 
                       label="Email" 
                       defaultValue={email}
                       required
                    />
                    <FormInput 
                        onChange={this.handleChange} 
                        id="password"  
                        type="password" 
                        name="password" 
                        label="Password" 
                        defaultValue={password}
                        required
                    />
                    <FormInput 
                        onChange={this.handleChange} 
                        id="confirmPassword"  
                        type="password" 
                        name="confirmPassword" 
                        label="Confirm Password"
                        defaultValue={confirmPassword}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign up</CustomButton>
                    </div>
                </form>
            </div>
            
        )
    }
}


export default SignUp;