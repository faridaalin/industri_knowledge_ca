import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import serializers from '../block-content';



function SinglePost({blogPost}) {
    console.log(blogPost)
    return (
        <div>
            <p>Blog title: {blogPost.title}</p>
            <p>Published at: {blogPost.publishedAt}</p>
            <div>

            <BlockContent blocks={blogPost._rawBody}  serializers={serializers} />
            </div>
        </div>
    )
}

export default SinglePost;
