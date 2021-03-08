import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const history= useHistory();
    const {title,body,userId,id}= props.post;
    const handleClick=()=>{
        
        history.push(`/post/${id}`)
    }
    return (
        <div style={{margin:'20px',border:'2px solid red',padding: '20px',backgroundColor:'lightcoral'}}>
            <h3>User: {userId}</h3>
            <h2>Title: {title}</h2>
            <button onClick={handleClick}>View Post</button>
        </div>
    );
};

export default Post;