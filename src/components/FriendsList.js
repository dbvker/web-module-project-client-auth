import React from 'react';

import axios from 'axios';

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    const token = localStorage.getItem("token")
    axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization: token
      }
      }).then(resp => {
        console.log(resp.data);
        this.setState({
          friends: resp.data
        })
      }).catch(err => {
        console.error(err);
      })
  };

  render() {
    return (
        <div>
            <center>
                <h1>FRIENDS LIST</h1>
            </center>
            <div className='friends-container'>
              {this.state.friends.map(friend => {
                return <div key={friend.id}>- {friend.name} - {friend.email}</div>;
              })}
            </div>
        </div>
    );
};
}
    

export default FriendsList;
