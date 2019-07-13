import React from 'react'

const AuthorCompany = ({ name, catchPhrase }) => {
    return (
        <article className="author-company">
            <div>
                <h2>Company</h2>
                <div>{name}</div>
                <div>{catchPhrase}</div>
            </div>
        </article>
    )
}

export { AuthorCompany }