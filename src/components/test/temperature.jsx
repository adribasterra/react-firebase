import React, { Fragment, useState } from 'react';

const Temperature = () => {
    
    const [ temperature, setTemperature ] = useState(19);
    const Increment = () => {
        setTemperature(temperature +1);
    };
    const Decrement = () => {
        setTemperature(temperature -1);
    };

    return (
        <Fragment>
            <h2>Temperature is: { temperature }</h2>
            <p>
                { temperature > 21 ? "That's hot" : "That's pretty cold" }
            </p>
            <button className="btn btn-success btn-block" onClick={Increment}>Increment</button>
            <button className="btn btn-success btn-block" onClick={Decrement}>Decrement</button>
        </Fragment>
    );
}

export default Temperature;