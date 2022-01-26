import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
                    <Route path='/friends_list' component={FriendsList} />
                    <Route path='/add_friend' component={AddFriend} />
                    <Route path='/logout' component={Logout} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
