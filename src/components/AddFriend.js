import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
    name: '',
    email: '',
    age: '',
};

const AddFriend = () => {
  const { push } = useHistory();
    const [addFriend, setAddFriend] = useState(initialValues);

    const handleChange = (e) => {
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:9000/api/friends', addFriend)
            .then(() => {
                push('/friends')
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <center>
                <h1>ADD FRIEND</h1>
            </center>
            <form onSubmit={handleSubmit} className='add-friend'>
                <label>
                    Friend Name:
                    <input type='text' name='name' value={addFriend.name} onChange={handleChange} />
                </label>
                <label>
                    Friend Email:
                    <input type='text' name='email' value={addFriend.email} onChange={handleChange} />
                </label>
                <label>
                    Friend Age:
                    <input type='text' name='age' value={addFriend.age} onChange={handleChange} />
                </label>
                <button>Add Friend</button>
            </form>
        </div>
    );
};

export default AddFriend;
