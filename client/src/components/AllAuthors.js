import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '@reach/router';

const AllAuthors = () => {
    const[ allAuthors, setAllAuthors] = useState([]);
    const [deleted, setDelete ] = useState(false);

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
        .then(res => {
            console.log(res);
            if( deleted == false ) {
                setDelete(true)
            }
            else {
                setDelete(false)
            }
        })
    }
    useEffect( () => {
        console.log("hi")
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res);
                setAllAuthors(res.data.results)
            });
    }, [deleted] );
    return (
        <div>
            <nav> <Link to = "/new"> Add an Author </Link></nav>

            <h3> We have quotes by: </h3>

            <table>
                <thead>
                    <tr>
                        <th> Author </th>
                        <th> Actions </th>
                    </tr>
                </thead>

                <tbody>
                    {allAuthors.map( (author, i ) => 
                    <tr key={i}>
                        <td> {author.name} </td>
                        <td> 
                            <Link to={ `/edit/${author._id}`}> <button> Edit </button> </Link>&nbsp;  
                            <button onClick={() => deleteAuthor(author._id)}> Delete </button>
                        </td>
                        
                    </tr>
                    
                    )}   

                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors
