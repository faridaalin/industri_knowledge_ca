import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react'

function SinglePost({blogPost}) {
    console.log(blogPost)
    return (
        <div>
            <p>Blog title: {blogPost.title}</p>
            <p>ID: {blogPost.id}</p>
        </div>
    )
}

export default SinglePost;
