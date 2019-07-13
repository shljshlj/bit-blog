import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ postId, authorId, body, title }) => {
    return (
        <li>
            <Link to={`/posts/${authorId}/${postId}`}><h3>{title}</h3></Link>
            <div>{body.slice(0, 70) + '...'}</div>
        </li>
    )
}

export { PostItem }