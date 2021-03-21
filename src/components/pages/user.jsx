import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useHistory, useParams } from 'react-router-dom'

const User = () => {

    const [ user, setUser ] = useState([]);
    const { id } = useParams();

    const getUser = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await result.data;
        setUser(user);
    }

    useEffect( () => {
        getUser();
    }, []);

    return (
        <Fragment>
            <h4>User</h4>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <small>Phone: {user.phone}</small>
        </Fragment>
    );
}

export default User;