import React from 'react'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
    return (
        <nav className='header-menu'>
            <ul>
                <li><Link to='/bit-blog'>Home</Link> </li>
                <li><Link to='/bit-blog/authors'>Authors</Link></li>
                <li><Link to='/bit-blog/about'>About</Link></li>
                <li><Link to='/bit-blog/posts/new'>CreatePost</Link></li>
            </ul>
        </nav>
    )
}

export { HeaderMenu }