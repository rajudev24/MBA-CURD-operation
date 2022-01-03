import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const [logInUser, setLogInUser] = useState({});
    const { registerUser} = useAuth();
    const navigate = useNavigate();

    const HandleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUser = { ...logInUser };
        newLoginUser[field] = value;
        setLogInUser(newLoginUser);
    }
    console.log(logInUser)

    const handleRegister = (e) => {
        if(logInUser.password !== logInUser.password2){
            alert('Password did bot match')
            return
        }
        registerUser(logInUser.email, logInUser.password)
        e.preventDefault();
       navigate('/home')
    }   
    return (
        <div className='login-section'>

            <form className='input-form' onSubmit={handleRegister}>
                <h2>Please Register</h2>
                <input type="email"
                    name="email"
                    onBlur={HandleOnBlur}
                    placeholder='Your Email'
                /> <br />

                <input type="password"
                    name="password"
                    onBlur={HandleOnBlur}
                    placeholder='Your Password'
                /> <br />
                <input type="password"
                    name="password2"
                    onBlur={HandleOnBlur}
                    placeholder='Retype Your Password'
                /> <br />

                <Link to='/'>Register User? Please Login! </Link> <br />
                <button type='submit'>Register</button>
            </form>
        </div>

    );
};

export default Register;