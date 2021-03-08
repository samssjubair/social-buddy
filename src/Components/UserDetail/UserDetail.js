import React from 'react';
import { useHistory } from 'react-router';

const UserDetail = (props) => {
    const {name,id,username,email}=props.user;
    const history=useHistory();
    const viewPostClick=()=>{
        history.push(`/user/${id}`)
    }
    return (
        <div>
            <h2>{username}</h2>
            <p><u>Email: </u>{email}</p>
            <p><u>Username: </u>{username}</p>
            <button onClick={viewPostClick}>View Post</button>
        </div>
    );
};

export default UserDetail;