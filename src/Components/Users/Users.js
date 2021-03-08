import React, { useEffect, useState } from 'react';
import UserDetail from '../UserDetail/UserDetail';

const Users = () => {
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>

            <h1>Users</h1>
            {
                users.map(user=> <UserDetail user={user}></UserDetail> )
            }
        </div>
    );
};

export default Users;