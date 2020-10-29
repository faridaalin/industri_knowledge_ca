import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react'

function SingleProject({project}) {
    console.log(project)
    return (
        <div>
            <p>Title: {project.title}</p>
            <p>ID: {project.id}</p>
        </div>
    )
}

export default SingleProject;
