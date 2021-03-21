import React, { Fragment, useState } from 'react';

const Form = () => {
    
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');

    const Validate = (event) => {
        // Evaluate input on form fields
        event.preventDefault();
        if(!name.trim){
            console.log("empty name");
        }
        if(!age.trim){
            console.log("empty age");
        }
    }


    return (
        <Fragment>
            <div>
                <form className= "form-group" onSubmit={Validate}>
                    <input 
                        placeholder="Name"
                        type="text"
                        className="form-control mb-3"
                        onChange = { (event) => { setName(event.target.value)}}
                    />
                    <input
                        placeholder="Age"
                        type="text"
                        className="form-control mb-3"
                        onChange = { (event) => { setName(event.target.value)}}
                    />
                    <input className="btn btn-info btn-block" type="submit"/>
                </form>
            </div>
        </Fragment>
    );
}

export default Form;