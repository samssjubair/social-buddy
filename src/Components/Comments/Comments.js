import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const Comments = () => {
    const {pId}=useParams();
    const [comments,setComments]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${pId}/comments`)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])

    return (
        <div>
            {
                comments.map(cm=> <Comment comment={cm}></Comment> )
            }
        </div>
    );
};

export default Comments;