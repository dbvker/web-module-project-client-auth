import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Header from './components/Header';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/login' component={Login} />
                    <PrivateRoute exact path='/friends' component={FriendsList} />
                    <PrivateRoute path='/friends/add' component={AddFriend} />
                    <PrivateRoute path='/logout' component={Logout} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
