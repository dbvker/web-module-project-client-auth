import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(resp => {
        setFriends(resp.data)
      }).catch(err => {
        console.error(err);
      })
   }, []);

    return (
        <div>
            <center>
                <h1>FRIENDS LIST</h1>
            </center>
            <div className='friends-container'>
              {friends.map(friend => {
                return <p key={friend.id}>- {friend.name} - {friend.age} - {friend.email}</p>;
              })}
            </div>
        </div>
    );
};

    

export default FriendsList;
