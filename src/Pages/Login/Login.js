import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const [logInUser, setLogInUser] = useState({});
    const { loginNewUser, loading } = useAuth();
    const navigate = useNavigate();

    const HandleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUser = { ...logInUser };
        newLoginUser[field] = value;
        setLogInUser(newLoginUser);
    }
    console.log(logInUser)

    const handleLogIn = (e) => {
        e.preventDefault();
        loginNewUser(logInUser.email, logInUser.password)
        navigate('/home')
    }

    return (
        <div className='login-section'>
            <form className='input-form' onSubmit={handleLogIn}>
                <h2>Please Login</h2>
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

                <Link to='/register'>New User? Please Register! </Link> <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;