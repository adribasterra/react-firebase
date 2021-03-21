import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


const Users = () => {

    const [ users, setUsers ] = useState([]);

    const getUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        const users = await result.data;
        setUsers(users);
    }

    useEffect( () => {
        getUsers();
    }, []);

    return (
        <Fragment>
            <h2>Users</h2>
            {
                users.map( (item) => (
                    <div>
                        <Link to={'/users/' + item.id}>{item.name}</Link>
                    </div>
                ))
            }
        </Fragment>
    );
}

export default Users;