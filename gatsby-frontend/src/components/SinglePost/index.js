import React from 'react';
import BlockContent from '../block-content';




function SinglePost({blogPost}) {
    console.log(blogPost)
    return (
        <div>
            <p>Blog title: {blogPost.title}</p>
            <p>Published at: {blogPost.publishedAt}</p>
            <div>

            <BlockContent blocks={blogPost._rawBody}  />
            </div>
        </div>
    )
}

export default SinglePost;
