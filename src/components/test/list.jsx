import React, { Fragment, useState } from 'react';

const List = () => {
    
    const [ nums, setNums ] = useState([1,2,3,4,5,6]);

    return (
        <Fragment>
            <ul>
                {
                    nums.map( (item, index) =>
                        <li key = { index }>{ item }</li>
                    )
                }
            </ul>
        </Fragment>
    );
}

export default List;