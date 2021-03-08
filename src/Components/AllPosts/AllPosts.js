import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import PostDetail from '../PostDetail/PostDetail';

const AllPosts = () => {
    const [posts,setPosts]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h1>All post</h1>
            {
                posts.map(ps=> <Post post={ps}></Post> )
            }
        </div>
    );
};

export default AllPosts;