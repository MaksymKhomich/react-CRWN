import { useState } from "react";
import { 
    signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import './sign-in-form.style.scss'


const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = () =>{
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const signInWithGoogle = async () => {
        await signInWithGoogle();
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-login-credentials': 
                    alert('Incorrect password or email');
                    resetFormFields();
                    break;
                default : 
                    alert(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput 
                    label='Email'
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}/>

                <FormInput  
                    label='Password'   
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}/>

                <div className="buttons-container">
                    <Button type="submit">
                        Sign In
                    </Button>

                    <Button 
                        type='button' 
                        buttonType={BUTTON_TYPES_CLASSES.google}
                        onClick={signInWithGoogle}>
                            Google Sign In
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;