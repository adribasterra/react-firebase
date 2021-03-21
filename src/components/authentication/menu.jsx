import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase-config.js';

const Menu = () => {

    const historial = useHistory();
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged( (user) => {
            if(user){
                setUser(user.email);
            }
        });
    });

    const LogOut = () => {
        auth.signOut();
        setUser(null);
        historial.push('/');
    }

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li>
                        {
                            user == null ? (
                                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            ) : ( <span></span> )
                        }
                    </li>
                    <li>
                        {
                            user == null ? (
                                <li className="nav-item"><Link className="nav-link" to="admin">Admin</Link></li>
                            ) : ( <span></span> )
                        }
                    </li>
                </ul>
                {
                    user != null ? (
                        <button className="btn btn-danger float-right" onClick={LogOut}>Log out</button>
                    ) : (
                        <span></span>
                    )
                }
            </nav>
        </Fragment>
    );
}

export default Menu;