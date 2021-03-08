import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const PostDetail = () => {
    const {postId}=useParams();
    const [post,setPost]=useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    const history=useHistory();
    const clickComment=()=>{
        history.push(`/comment/${postId}`)
    }
    const {id,userId,title,body}=post;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
            <button onClick={clickComment}>View Comments</button>
        </div>
    );
};

export default PostDetail;