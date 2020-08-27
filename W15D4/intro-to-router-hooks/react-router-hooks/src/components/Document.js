import React from 'react'
import { useParams } from 'react-router-dom';

const Document = () => {
    const { userId, docId } = useParams();

    return (
        <>
            <h2>Document {docId}</h2>
            <p>Created by User {userId}</p>
        </>
    );
};

export default Document;