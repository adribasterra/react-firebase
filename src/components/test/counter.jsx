import React, { Fragment, useState } from 'react';

const Counter = () => {

    // useState is used for mantaining state during the app
    const [ num, setNum ] = useState(0);
    const Increment = () => {
        setNum(num +1);
    };
    const Decrement = () => {
        setNum(num-1);
    };

    return (
        <Fragment>
            <h2>Counter quantity: { num }</h2>
            <button className="btn btn-primary btn-block" onClick={Increment}>Increment</button>
            <button className="btn btn-primary btn-block" onClick={Decrement}>Decrement</button>
        </Fragment>
    )
}

export default Counter;