import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';
import { Link, navigate } from '@reach/router';

const CreateAuthor = () => {
    const [ author, setAuthor ] = useState({
        name: "",
    })
    const [errors, setErrors] = useState([]);

    const clearForm = () => {
        setAuthor({
            name: ""
        })
    }

    const submitAuthor = () => {
        axios.post("http://localhost:8000/api/authors/new", author )
            .then(res => {
                clearForm();
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errors =[];
                for ( const key of Object.keys(errorResponse)) {
                    errors.push(errorResponse[key].properties.message)
                }
                console.log(errors)
                setErrors(errors);
            })
    }
                
    return (
        <div>
            <nav> <Link to = "/"> Home </Link></nav>
            <h1> Add new Author </h1>
            {errors.map( (err, index) => <p style ={{color:"red"}} key={index}> {err} </p>)}
            <Form author = { author } setAuthor = { setAuthor } submitAuthor = { submitAuthor }/>

        </div>
    )
}

export default CreateAuthor
