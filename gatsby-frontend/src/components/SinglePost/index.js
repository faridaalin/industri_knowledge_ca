import React from 'react';
import BlockContent from '../block-content';

import styled from "styled-components/macro"

export const Date = styled.p`
padding: 1rem;
background: var(--whitesmoke--lightest);
color: var(--grey);
font-size: 0.7rem;
width: 30vw;
white-space:nowrap;
`;



function SinglePost({blogPost}) {
    console.log(blogPost)
    return (
        <div>
            <Date>{blogPost.publishedAt}</Date>
            <BlockContent blocks={blogPost._rawBody}  />
            
        </div>
    )
}

export default SinglePost;
