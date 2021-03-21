import React, { Fragment, useState } from 'react';
import { auth } from '../../firebase-config.js';
import { useHistory } from 'react-router-dom';

const Login = () => {
    
    const historial = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ messageError, setMessageError ] = useState(null);

    const RegisterUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then( r => {
                historial.push('/');
            })
            .catch (err => {
                if(err.code === 'auth/invalid-email'){
                    setMessageError("Invalid email");
                }
                if(err.code === 'auth/weak-password'){
                    setMessageError("Password should be at least 6 characters.");
                }
                console.log(err.code);
            });
    }

    const LoginUser = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then( r => {
            historial.push('/');
        })
        .catch (err => {
            if(err.code === 'auth/wrong-email'){
                setMessageError("Incorrect email.");
            }
            if(err.code === 'auth/wrong-password'){
                setMessageError("Incorrect password.");
            }
            console.log(err.code);
        });
    }

    return (
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegisterUser}>
                    <input
                        onChange={(e) => { setEmail(e.target.value)}}
                        className="form-control mt-4"
                        type="email"
                        placeholder="email"
                    />
                    <input
                        onChange={(e) => { setPassword(e.target.value)}}
                        className="form-control mt-4"
                        type="password"
                        placeholder="password"/>
                    <input className="btn btn-dark btn-block mt-4" type="submit" value="Register"/>
                </form>
                <button className="btn btn-success btn-block mt-2" onClick= {LoginUser}>Log in</button>
                {
                    messageError != null ? (
                        <div>{ messageError }</div>
                    ) : (
                        <span></span>
                    )
                }
            </div>
            <div className="col"></div>
        </div>
    );
}

export default Login;