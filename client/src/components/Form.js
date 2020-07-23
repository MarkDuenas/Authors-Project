import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

const Form = (props) => {
    const{ author, submitAuthor, setAuthor} = props
    
    const changeHandler = e => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        });
    }
    const submitHandler = e => {
        e.preventDefault();
        submitAuthor();
    };


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name"> Author's name: </label>
                    <input type="text" name="name" value={author.name} onChange={changeHandler}/>
                </div>
                <Link to="/"> <button>Cancel</button> </Link> <br/>
                <button> Submit </button>
                
            </form>
        </div>
    )
}

export default Form
