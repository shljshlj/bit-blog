import React from 'react'

const Footer = () => {
    
    return (
        <footer>
            <div className="container flex-row">
                Copyright &copy; 2019
                {new Date().getFullYear() > 2019 && `-${new Date().getFullYear()}`}
            </div>
        </footer>
    )
}

export { Footer }