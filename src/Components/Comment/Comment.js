import React from 'react';

const Comment = (props) => {
    const {name,email,body}=props.comment;
    return (
        <div style={{margin:'20px',backgroundColor:'skyblue',padding:'20px',border:'2px solid blue'}}>
             <h4>User: {name}</h4>
              <h6>Comment:</h6> <p>{body}</p>
        </div>
    );
};

export default Comment;