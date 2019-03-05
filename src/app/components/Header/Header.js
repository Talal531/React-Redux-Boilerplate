import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

const Header = () => {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/contact/">Users</Link></li>
        </nav>
    );
};

export default Header;