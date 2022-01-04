import React from 'react';
import './sign-in.styles.scss';
import FormInput  from '../form/form-input';
import CustomButton  from '../form/button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super()

        this.state = {
            email: '',
            password: ''
        }
       
    }

    handleChange = async event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
           await auth.signInWithEmailAndPassword(email, password);
           this.state = {
                email: '',
                password: ''
            }
        } catch (error) {
            console.error(error);
        }
        this.setState({
            email: '',
            password: ''
        });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                       onChange={this.handleChange} 
                       id="email"  
                       type="email" 
                       name="email" 
                       label="email" 
                       defaultValue={this.state.email}  
                    />
                    <FormInput 
                        onChange={this.handleChange} 
                        id="password"  
                        type="password" 
                        name="password" 
                        label="password" 
                        defaultValue={this.state.password}  
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
            
        )
    }
}


export default SignIn;