import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

const Header = () => {
    return (
        <header>
            <div className='container flex-row'>
                <Link to='/'><h1>BLOG</h1></Link>
                <HeaderMenu />
            </div>
        </header>
    )
}

export { Header }