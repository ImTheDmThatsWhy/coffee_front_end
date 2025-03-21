import React from 'react'
import './Nav.css'


const Nav = () => {
    return (
        <navbar className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/favourites">Favourites</a></li>
                <li><a>Contact</a></li>
                <li><a>Posts</a></li>
                <li className="nav-right"><a>Account</a></li>
                

            </ul>
        </navbar>
    )
}

export default Nav