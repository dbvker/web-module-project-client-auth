import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {
    let { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                localStorage.removeItem('username');
                push('/');
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return <div>Logout</div>;
};

export default Logout;
