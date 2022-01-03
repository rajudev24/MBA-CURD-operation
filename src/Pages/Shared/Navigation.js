import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user,  logOutUser } = useAuth();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        logOutUser();
        navigate('/')
    }
    return (
        <div className='navbar'>
            <ul className='menu-list'>
                {
                    !user?.email ? <li><Link to='/'>Login</Link> </li> :
                        <>
                            <li><Link to='/home'>Home</Link> </li>
                            <li><Link to='/addpost'>Add Post</Link> </li>
                            <li><Link to='/update'>Update</Link> </li>
                        </>
                }


            </ul>
            <div className='menu-list'>
                {
                    user?.email && <li> <button onClick={ handleLogout}>Logout</button> </li>
                }

            </div>
        </div>
    );
};

export default Navigation;