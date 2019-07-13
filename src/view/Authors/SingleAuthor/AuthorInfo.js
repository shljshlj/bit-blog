import React from 'react'

const AuthorInfo = ({ name, username, email, phone }) => {
    return (
        <article className="author-info flex-row">
            <div className="author-image">
                <img src="https://avatars1.githubusercontent.com/u/6689528?s=180&v=4" alt="user" />
            </div>
            <div className="author-info-body">
                <h2>{name}</h2>
                <div>{username}</div>
                <div>{email}</div>
                <div>{phone}</div>
            </div>
        </article>

    )
}

export { AuthorInfo }