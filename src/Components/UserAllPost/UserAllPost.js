import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PersonAllPost from '../PersonAllPost/PersonAllPost';
import Post from '../Post/Post';

const UserAllPost = () => {
    const {userId}=useParams();
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            {
                posts.map(post=> <Post post={post}></Post> )
            }
        </div>
    );
};

export default UserAllPost;