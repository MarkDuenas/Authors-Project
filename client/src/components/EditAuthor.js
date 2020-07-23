import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";
import Form from './Form';

const EditAuthor = (props) => {
    const [author, setAuthor] = useState({
        name: "",
    });

    useEffect( () => {
        axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => {
                setAuthor(res.data.results);
            })
    }, [])

    const submitAuthor = () => {
        axios.put(`http://localhost:8000/api/author/update/${props.id}`, author )
            .then(res => {
                console.log(res)
                navigate("/")
            })
    };

    return (
        <div>
            <h1> Edit Authors </h1>
            
            <Form author={author} setAuthor={setAuthor} submitAuthor={submitAuthor} />
        </div>
    )
}

export default EditAuthor
