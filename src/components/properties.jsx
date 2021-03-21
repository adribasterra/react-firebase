import React, { Fragment, useState } from 'react';

const Properties = (props) => {

    const name = props && props.name;

    return (
        <Fragment>
            <h4>Welcome {name}</h4>
        </Fragment>
    );
}

export default Properties;