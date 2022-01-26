import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const isLoggedIn = localStorage.getItem("token");

    return (
        <div className='header'>
            <div>
                <strong>
                    <Link to='/'>FRIENDS DATABASE</Link>
                </strong>
            </div>
            <div>
                <Link to='/login'>LOGIN</Link>
                <Link to='/friends_list'>FRIENDS LIST</Link>
                <Link to='/add_friend'>ADD FRIEND</Link>
                <Link to='/logout'>LOGOUT</Link>
            </div>
        </div>
    );
};

export default Header;
