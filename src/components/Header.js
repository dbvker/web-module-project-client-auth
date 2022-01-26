import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const isLoggedIn = localStorage.getItem('token');

    return (
        <div className='header'>
            <div>
                <strong>
                    <Link to='/'>FRIENDS DATABASE</Link>
                </strong>
            </div>
            <div>
                <Link to='/login'>LOGIN</Link>
                {isLoggedIn && <>
                    <Link to='/friends'>FRIENDS LIST</Link>
                    <Link to='/friends/add'>ADD FRIEND</Link>
                    <Link to='/logout'>LOGOUT</Link>
                </>}
            </div>
        </div>
    );
};

export default Header;
