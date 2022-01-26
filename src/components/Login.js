import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialCredentials = {
    username: '',
    password: '',
};

const Login = () => {
    const [credentials, setCredentials] = useState(initialCredentials);
    let history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:9000/api/login', credentials)
            .then(resp => {
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("username", resp.data.username);
                localStorage.setItem("role", resp.data.role);
                history.push("/friends_list");
            })
            .catch(err => {
                console.log(`couldn't log in: ${err}`)
            })
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className='login' onSubmit={handleLogin}>
            <center>
                <h1>LOGIN</h1>
            </center>
            <label>
                <strong>Username:</strong>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder='Username'
                />
            </label>
            <label>
                <strong>Password:</strong>
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder='Password'
                />
            </label>
            <button>Login</button>
        </form>
    );
};

export default Login;
