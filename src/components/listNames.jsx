import React, { Fragment, useState } from 'react';
import uniqid from 'uniqid'

const ListNames = () => {

    const [ name, setName ] = useState('');
    const [ id, setId ] = useState('');
    const [ listNames, setListNames ] = useState([]);
    const [ editionMode, setEditionMode ] = useState(false);
    const [ error, setError ] = useState(null);

    const AddName = (e) => { 
        e.preventDefault();
        if(!name.trim()){
            setError("name is empty");
            return;
        }
        const newName = {
            id: uniqid(),
            name
        }
        setListNames([... listNames, newName ]);
        setName('');
        setError(null);
    }

    const DeleteName = (id) => {
        const newArray = listNames.filter(item => item.id !== id);
        setListNames(newArray);
    }

    const Edit = (item) => {
        setEditionMode(true);
        setName(item.name);
        setId(item.id);
    }
    
    const EditName = (e) => {
        e.preventDefault();
        const newArray = listNames.map(item => item.id === id ? { id, name } : item);
        setListNames(newArray);
        setEditionMode(false);
        setName('');
    }

    return (
        <Fragment>
            <h2>Basic CRUD app</h2>
            <div className="row">
                <div className="col">
                    <h2>Name list</h2>
                    <ul className="list-group">
                        {
                            listNames.map( item => 
                                    <li key={item.id} className="list-group-item float-left">
                                        {item.name}
                                        <button
                                            className="btn btn-danger float-right"
                                            onClick={ () => { DeleteName(item.id)}}
                                            style={{float: "right"}}
                                        >Delete</button>
                                        <button
                                            className="btn btn-info float-right"
                                            onClick={ () => { Edit(item)}}
                                            style={{float: "right"}}
                                        >Edit</button>
                                    </li>
                                )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Add names form</h2>
                    <form onSubmit={ editionMode ? EditName : AddName }>
                        <input
                            onChange={ (e) => { setName(e.target.value) } }
                            className="form-control"
                            type="text"
                            placeholder="Name"
                            value={name}
                        />
                        {
                            error != null ? (
                                <div className="alert alert-danger">{ error }</div>
                                ) : (
                                    <div></div>
                                )
                        }
                        <input
                            className="btn btn-info btn-block"
                            type="submit"
                            value={ editionMode ? "Edit" : "Add" }/>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default ListNames;