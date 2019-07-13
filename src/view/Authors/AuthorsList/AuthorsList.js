import React from 'react';
import { Link } from 'react-router-dom';

const AuthorsList = ({ authors }) => {
    return (
        <ul className="authors-list">
            {authors.map(author => <li><Link to={`/authors/${author.authorId}`}>{author.name}</Link></li>)}
        </ul>
    )
}

export { AuthorsList }