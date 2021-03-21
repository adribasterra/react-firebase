import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    
    const { input } = useParams();

    return (
        <Fragment>
            <h1>About</h1>
            { input }
        </Fragment>
    );
}

export default About;