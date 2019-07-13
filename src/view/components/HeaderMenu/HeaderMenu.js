import React from 'react'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
    return (
        <nav className='header-menu'>
            <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/authors'>Authors</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/posts/new'>CreatePost</Link></li>
            </ul>
        </nav>
    )
}

export { HeaderMenu }