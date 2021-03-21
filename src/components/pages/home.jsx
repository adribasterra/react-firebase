import React, { Fragment, useState, useEffect } from 'react';

const Home = () => {

    const [ name, setName ] = useState('Sara');

    useEffect(() => {
        setTimeout(() => {
            setName("Adri");
        }, 2000);
    });

    return (
        <Fragment>
            <h1>Home</h1>
            { name }
        </Fragment>
    );
};

export default Home;