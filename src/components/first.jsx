import React, { Fragment } from 'react'

function Hey(){
    return (
        // There's a need of a container that encapsulates the content, a main container
        // To avoid many divs in the app, the fragment is placed, it is not renderized in the DOM
        <Fragment>
            <h2>Hello</h2>
        </Fragment>
    )
}

export default Hey;