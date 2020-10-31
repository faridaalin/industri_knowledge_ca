import React from 'react';
//YYYY/MM
function SingleProject({project}) {
    return (
        <div>
            <p>Title: {project.title}</p>
            <p>ID: {project.id}</p>
        </div>
    )
}

export default SingleProject;
