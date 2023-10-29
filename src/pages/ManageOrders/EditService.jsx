import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditService = () => {
    const loadedService = useLoaderData()
    console.log(loadedService)
    return (
        <div>
            <h1>Edit service </h1>
        </div>
    );
};

export default EditService;