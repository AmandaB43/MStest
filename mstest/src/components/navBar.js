import React from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';

export default function navBar(){
    return <nav className="nav">
        <a href="/" className="site-title">Home Page</a>
        <ul>
            <li>
                <a href="/about">About</a>
            </li>
                <li>
                <a href="/recipes">Recipes</a>
                </li>
                    <li>
                        <a href='/reviews'> Reviews </a>
                    </li>
        </ul>
        <button>
            <FaTimes/>
        </button>
    </nav>
}
